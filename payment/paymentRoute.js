require("dotenv").config();
const formidable = require("formidable");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const https = require("https");
const PaytmChecksum = require("./PaytmChecksum");

router.post("/callback", (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, file) => {
    paytmChecksum = fields.CHECKSUMHASH;
    delete fields.CHECKSUMHASH;

    var isVerifySignature = PaytmChecksum.verifySignature(
      fields,
      "D!TKV69bgALRCVX4",
      paytmChecksum
    );
    if (isVerifySignature) {
      var paytmParams = {};
      paytmParams["MID"] = fields.MID;
      paytmParams["ORDERID"] = fields.ORDERID;

      /*
       * Generate checksum by parameters we have
       * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
       */
      PaytmChecksum.generateSignature(paytmParams, "D!TKV69bgALRCVX4").then(
        function (checksum) {
          paytmParams["CHECKSUMHASH"] = checksum;

          var post_data = JSON.stringify(paytmParams);

          var options = {
            /* for Staging */
            hostname: "securegw-stage.paytm.in",

            /* for Production */
            // hostname: 'securegw.paytm.in',

            port: 443,
            path: "/order/status",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Content-Length": post_data.length,
            },
          };

          var response = "";
          var post_req = https.request(options, function (post_res) {
            post_res.on("data", function (chunk) {
              response += chunk;
            });

            post_res.on("end", function () {
              res.sendFile("./res.html", { root: __dirname });
            });
          });

          post_req.write(post_data);
          post_req.end();
        }
      );
    } else {
      console.log("Checksum Mismatched");
    }
  });
});

router.post("/payment", (req, res) => {
  const { amount, email } = req.body;

  /* import checksum generation utility */
  const totalAmount = JSON.stringify(amount);
  var params = {};

  /* initialize an array */
  (params["MID"] = "MScJVn79840867187535"),
    (params["WEBSITE"] = "WEBSTAGING"),
    (params["CHANNEL_ID"] = "WEB"),
    (params["INDUSTRY_TYPE_ID"] = "Retail"),
    (params["ORDER_ID"] = uuidv4()),
    (params["CUST_ID"] = "CUS0001000"),
    (params["TXN_AMOUNT"] = totalAmount),
    (params["CALLBACK_URL"] = "http://localhost:5000/api/callback"),
    (params["EMAIL"] = email),
    (params["MOBILE_NO"] = "9058937786");

  /**
   * Generate checksum by parameters we have
   * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
   */
  var paytmChecksum = PaytmChecksum.generateSignature(
    params,
    "D!TKV69bgALRCVX4"
  );
  paytmChecksum
    .then(function (checksum) {
      let paytmParams = {
        ...params,
        CHECKSUMHASH: checksum,
      };
      res.json(paytmParams);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
