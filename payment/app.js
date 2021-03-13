const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const paymentRoute = require("./paymentRoute");

app.use(bodyParser.json());
app.use(cors());
app.use("/api", paymentRoute);

const port = 5000;

app.listen(port, () => {
  console.log(`APP IS RUNNING AT ${port}`);
});
