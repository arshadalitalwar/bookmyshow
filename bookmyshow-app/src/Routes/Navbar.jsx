import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Components/Styling/Navbar.module.css";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cityRequest, storeAuth } from "../Redux/app/actions";
import Login from "../Pages/LoginPage";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: "auto",
  },
});
const location = [
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png",
    name: "Mumbai",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/ncr-selected.png",
    name: "NCR",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/bang.png",
    name: "Bangaluru",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png",
    name: "Hyderabad",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png",
    name: "Ahemdabad",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/chd.png",
    name: "Chandigarh",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/chen.png",
    name: "Chennai",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/pune.png",
    name: "Pune",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png",
    name: "Kolkata",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/koch.png",
    name: "Kochi",
  },
];
const Navbar = () => {
  const [query, setQuery] = React.useState("");
  const [city, setCity] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [cityName, setCityName] = React.useState("Select City");
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [state, setState] = React.useState(false);
  const [auth, setAuth] = React.useState(false);
  const [action, setAction] = React.useState(false);
  const isAuth = useSelector((state) => state.app.isAuth);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleLocation = (name) => {
    setOpen(false);
    setCityName(name);
  };

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(cityRequest(cityName));
  }, [cityName]);

  const toggleDrawer = (open) => (event) => {
    setState(!state);
  };

  const handleSignIn = () => {
    setAction(true);
    setState(false);
  };
  const handleCloseLogin = (number) => {
    if (+number === 7275584516) {
      setAuth(true);
      alert("Successfully Logged in");
    } else if (+number === 123456789) {
      setAuth(true);
      alert("Successfully Logged in");
    } else if (+number === "") {
      alert("Please type your number");
      handleCloseLogin(number);
    } else {
      alert("You are not registered");
    }
    setAction(false);
    setState(false);
  };
  React.useEffect(() => {
    dispatch(storeAuth(auth));
  }, [auth]);

  console.log(isAuth);
  return (
    <div>
      <div className={styles.navbar}>
        <div style={{ display: "flex", alignItems: "center", width: "65%" }}>
          <Link className={styles.link} to="/">
            <svg height="40" width="150">
              <image
                href="//in.bmscdn.com/webin/common/icons/bms.svg"
                width="150"
                height="40"
              ></image>
            </svg>
          </Link>
          <div className={styles.searchBar}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", fontSize: "17px" }}
        >
          <div className={styles.location} onClick={handleClickOpen}>
            <div>{cityName}</div>
            <ArrowDropDownIcon />
          </div>
          {!isAuth && (
            <button onClick={handleSignIn} className={styles.signBtn}>
                <p>Sign In</p>
              
            </button>
          )}
          <Login action={action} handleCloseLogin={handleCloseLogin} />
          <div
            onClick={toggleDrawer(true)}
            onClose={toggleDrawer(false)}
            className={styles.profile}
          >
            {isAuth && <AccountCircleIcon style={{ fontSize: "40px" }} />}
            {isAuth && <div>Hi, User..</div>}

            <Drawer anchor="right" open={state}>
              <div className={styles.drawer}>
                <div>
                  <div>Hi, User </div>
                  <Link
                    style={{ marginLeft: 0, fontSize: "17px" }}
                    className={styles.link}
                  >
                    Edit Profile
                  </Link>
                </div>
                <AccountCircleIcon style={{ fontSize: "40px" }} />
              </div>
              <div className={styles.sideber_content}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#666"
                      fill-rule="evenodd"
                      d="M13.977 5.094l.002.002-.005-.002v.001l-.021-.005.206.045A5.002 5.002 0 0 1 18 10v6.974L20 19h-2l-3.55-.001a2.5 2.5 0 1 1-4.9 0L7.027 19v.004h-3L6 17.003V10a5.002 5.002 0 0 1 4.048-4.91l-.049.01L10 4a2 2 0 1 1 4 0l.001 1.1-.008-.002-.035-.008.018.004zm-.563 13.905h-2.829a1.5 1.5 0 1 0 2.83 0zM13 6h-2a4 4 0 0 0-4 4v6.978L7.014 18H17v-8a4 4 0 0 0-4-4zm.983-.904l.003.001.007.001-.008-.001-.002-.001zm-.002 0h.002l-.005-.002.003.002zm-.28-.047l.112.017.018.002-.13-.019zm-3.388-.003l-.057.009.036-.005.02-.004zm.267-.029l-.172.018.148-.016.024-.002zm2.928.008l.082.01a5.014 5.014 0 0 0-.082-.01zm-2.803-.016l-.125.008h.015l.11-.008zm2.538-.003h.013l.05.003-.063-.003zM12 3a1 1 0 0 0-1 1v1h2V4a1 1 0 0 0-1-1z"
                    ></path>
                  </svg>
                  <span>Notifications</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#666"
                      fill-rule="evenodd"
                      d="M16.121 16.793l2.829 2.828-2.829 2.829-.707-.707 2.122-2.122-2.122-2.121.707-.707zm3 0l2.829 2.828-2.829 2.829-.707-.707 2.122-2.122-2.122-2.121.707-.707zM12 2c5.523 0 10 4.477 10 10 0 1.27-.237 2.509-.693 3.665l-.144.345-1.085-.477.308-.26a9 9 0 1 0-6.577 5.544l.2.98c-.656.135-1.328.203-2.009.203-5.523 0-10-4.477-10-10S6.477 2 12 2zm-.178 5.01l.014.01H15v1h-2.113a3.493 3.493 0 0 1 .613 2H15v1l-1.651.001a3.503 3.503 0 0 1-2.943 2.456l-.201.017 3.149 3.149-.708.707-3.996-3.996a.5.5 0 0 1 .268-.847l.086-.007H10a2.5 2.5 0 0 0 2.283-1.48h-3.78v-1H12.5L12.5 10c0-.789-.368-1.513-.974-1.98H8.504v-1h3.313l.005-.01z"
                    ></path>
                  </svg>
                  <span>Quick pay</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#666"
                      fill-rule="evenodd"
                      d="M9.5 2A3.5 3.5 0 0 1 13 5.5V6h3l.375 6H22v3a2 2 0 1 0 0 4v3H2L3 6h3v-.5A3.5 3.5 0 0 1 9.5 2zM21 13H7v1.17a3.001 3.001 0 0 1 0 5.66V21h14v-1.17a3.001 3.001 0 0 1 0-5.66V13zM6 7H3.94l-.876 14H6v-2a2 2 0 1 0 0-4v-3h9.372l-.311-5H13v2h-1V7H7v2H6V7zm8 7.5l.735 1.489 1.643.238-1.19 1.16.281 1.636L14 18.25l-1.47.773.281-1.637-1.189-1.159 1.643-.238L14 14.5zM9.5 3A2.5 2.5 0 0 0 7 5.5V6h5v-.5A2.5 2.5 0 0 0 9.5 3z"
                    ></path>
                  </svg>
                  <Link
                    to="/profile/booking-history"
                    style={{ marginLeft: 20, color: "black" }}
                  >
                    Booking History
                  </Link>
                </div>
                <div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.5 0.450012C1.98122 0.450012 0.75 1.68123 0.75 3.20001L0.75 11.9667L0.75 13.1333C0.75 14.6521 1.98122 15.8833 3.5 15.8833L7.58137 15.8833L7.19803 18.1833H5.93335C5.51914 18.1833 5.18335 18.5191 5.18335 18.9333C5.18335 19.3476 5.51914 19.6833 5.93335 19.6833L16.0667 19.6833C16.4809 19.6833 16.8167 19.3476 16.8167 18.9333C16.8167 18.5191 16.4809 18.1833 16.0667 18.1833H14.8021L14.4187 15.8833L18.5 15.8833C20.0188 15.8833 21.25 14.6521 21.25 13.1333V11.9667L21.25 3.20001C21.25 1.68123 20.0188 0.450012 18.5 0.450012L3.5 0.450012ZM19.75 11.2167V3.20001C19.75 2.50966 19.1904 1.95001 18.5 1.95001L3.5 1.95001C2.80965 1.95001 2.25 2.50966 2.25 3.20001L2.25 11.2167L19.75 11.2167ZM2.25 12.7167L19.75 12.7167V13.1333C19.75 13.8237 19.1904 14.3833 18.5 14.3833L13.538 14.3833C13.5365 14.3833 13.5349 14.3833 13.5334 14.3833H8.46671C8.46516 14.3833 8.4636 14.3833 8.46205 14.3833L3.5 14.3833C2.80964 14.3833 2.25 13.8237 2.25 13.1333V12.7167ZM9.10206 15.8833H12.898L13.2814 18.1833L8.71873 18.1833L9.10206 15.8833ZM9.05302 3.81177C9.46927 3.57284 9.97603 3.5521 10.4105 3.75634L10.4116 3.75685L13.3496 5.14376C13.9171 5.39728 14.2832 5.96098 14.2832 6.58335C14.2832 7.20571 13.9171 7.76942 13.3496 8.02293L10.4105 9.41035C9.97595 9.61463 9.4691 9.59384 9.05281 9.3548C8.6235 9.11022 8.35598 8.65631 8.35008 8.16212L8.34998 8.15317L8.35003 5.00514C8.35556 4.51061 8.6233 4.05629 9.05302 3.81177ZM9.85003 5.1505L12.7175 6.50411C12.724 6.50719 12.7306 6.51017 12.7372 6.51306C12.7651 6.52527 12.7832 6.55286 12.7832 6.58335C12.7832 6.61383 12.7651 6.64142 12.7372 6.65363L12.7261 6.6586L12.7175 6.66258L9.85003 8.01619L9.85003 5.1505Z"
                      fill="#777"
                    ></path>
                  </svg>
                  <span>Stream Library</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#666"
                      fill-rule="evenodd"
                      d="M14.5 2a2.5 2.5 0 0 1 2.44 3.047L18.6 3.8l.6.8L17.333 6H20a1 1 0 0 1 1 1v4h-1v11H4V11H3V7a1 1 0 0 1 1-1h2.667L4.8 4.6l.6-.8 1.66 1.247A2.5 2.5 0 0 1 14.5 2zm-3 9H5v10h6.5v-2.041a3 3 0 0 1 0-5.918V11zm7.5 0h-6.5v2.042a3 3 0 0 1 0 5.916V21H19V11zm-7 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-.5-7H4v3h7.5V7zM20 7h-7.5v3H20V7zm-5.5-4A1.5 1.5 0 0 0 13 4.5V6h1.5a1.5 1.5 0 0 0 0-3zm-5 0a1.5 1.5 0 0 0-.144 2.993L9.5 6H11V4.5A1.5 1.5 0 0 0 9.5 3z"
                    ></path>
                  </svg>
                  <span>Rewards</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#666"
                      fill-rule="evenodd"
                      d="M8.23 1.833l1.147 1.984 2.187-.993 1.012 1.987 2.051-.994 1.148 1.988 2.05-.994 1.148 1.987 2.252-.993.947 1.987-4.346 14.375-5.367-1.67a3 3 0 0 0-5.678-1.766l-4.953-1.54 4.35-14.367 2.052-.99zm-.401 1.304l-.82.397L3.072 16.53l3.267 1.016a4 4 0 0 1 7.154 2.225l3.666 1.14 3.943-13.04-.363-.76-2.184.963-1.131-1.959-2.051.994-1.148-1.987-2.097 1.016-1.022-2.01-2.142.974-1.136-1.966zm6.509 4.74l1.215 4.053 1.098-4.043.965.261-.13.483-1.492 5.5c-.307 1.131-.927 1.793-1.83 1.863l-.161.006h-.5v-1h.5c.443 0 .76-.283.977-.966l.049-.165.029-.11-1.678-5.594.958-.288zM10.5 8a2.5 2.5 0 0 1 2.495 2.336L13 10.5v3.42h-1V10.5a1.5 1.5 0 0 0-1.356-1.493L10.5 9v5h-1V9H8v4.92H7V8h3.5z"
                    ></path>
                  </svg>
                  <span>BookASmile</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#666"
                      fill-rule="evenodd"
                      d="M12 2a7 7 0 0 1 7 7h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2a3.5 3.5 0 0 1-3.308 3.495l-.192.005-1.563.001a2 2 0 1 1 0-1.001H15.5a2.5 2.5 0 0 0 2.495-2.336L18 17V9A6 6 0 1 0 6 9v8H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2a7 7 0 0 1 7-7zm0 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-7-9H3v6h2v-6zm16 0h-2v6h2v-6z"
                    ></path>
                  </svg>
                  <span>Help & Support</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#666"
                      fill-rule="evenodd"
                      d="M14 2c.25 0 .46.18.49.42l.38 2.65c.61.25 1.17.58 1.69.98l2.49-1a.5.5 0 0 1 .61.22l2 3.46c.12.22.07.49-.12.64l-2.11 1.65c.04.32.07.64.07.98 0 .34-.03.66-.07.98l2.11 1.65c.19.15.24.42.12.64l-2 3.46c-.09.16-.26.25-.43.25-.06 0-.12-.01-.18-.03l-2.49-1c-.52.39-1.08.73-1.69.98l-.38 2.65c-.03.24-.24.42-.49.42h-4c-.25 0-.46-.18-.49-.42l-.38-2.65c-.61-.25-1.17-.58-1.69-.98l-2.49 1a.5.5 0 0 1-.61-.22l-2-3.46a.505.505 0 0 1 .12-.64l2.11-1.65A7.93 7.93 0 0 1 4.5 12c0-.33.03-.66.07-.98L2.46 9.37a.493.493 0 0 1-.12-.64l2-3.46c.09-.16.26-.25.43-.25.06 0 .12.01.18.03l2.49 1c.52-.39 1.08-.73 1.69-.98l.38-2.65c.03-.24.24-.42.49-.42zm-.437 1h-3.126l-.398 2.778-.53.217a6.672 6.672 0 0 0-1.469.855l-.45.338-.523-.21-2.076-.836-1.568 2.712 2.21 1.727-.07.563A6.881 6.881 0 0 0 5.5 12c0 .251.02.524.062.856l.07.563-.446.349-1.763 1.378 1.567 2.71 2.607-1.047.453.348c.461.355.945.637 1.46.848l.529.217.08.566.318 2.212h3.126l.398-2.778.53-.217a6.672 6.672 0 0 0 1.469-.855l.45-.338.523.21 2.076.836 1.568-2.712-2.21-1.727.07-.563A6.73 6.73 0 0 0 18.5 12c0-.258-.02-.518-.062-.856l-.07-.563.446-.349 1.763-1.378-1.567-2.71-2.607 1.047-.453-.348a6.305 6.305 0 0 0-1.46-.848l-.529-.217-.08-.566L13.562 3zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
                    ></path>
                  </svg>
                  <span>Settings</span>
                </div>
                <div className={styles.signout_button}>
                  <button>Sign out</button>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        TransitionComponent={Transition}
      >
        <DialogContent className={styles.Dialog}>
          <DialogContentText className={styles.location_content}>
            <SearchIcon />
            <input
              style={{
                border: "none",
                width: "550px",
                height: "40px",
                outline: "none",
              }}
              type="text"
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search for your city"
            />
          </DialogContentText>
          <div>Popular cities</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              textAlign: "center",
            }}
          >
            {location.map((loc) => (
              <div style={{ margin: "2px" }}>
                <img
                  onClick={() => handleLocation(loc.name)}
                  src={loc.link}
                  alt={loc.name}
                />
                <div>{loc.name}</div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      <div className={styles.secondNav}>
        <div>
          <Link className={styles.link} to="">
            Movies
          </Link>
          <Link className={styles.link} to="">
            Stream
          </Link>
          <Link className={styles.link} to="">
            Events
          </Link>
          <Link className={styles.link} to="">
            Plays
          </Link>
          <Link className={styles.link} to="">
            Sports
          </Link>
          <Link className={styles.link} to="">
            Activities
          </Link>
          <Link className={styles.link} to="">
            Fanhood
          </Link>
          <Link className={styles.link} to="">
            Buzz
          </Link>
        </div>
        <div>
          <Link className={styles.link} to="">
            Listyourshow
          </Link>
          <Link className={styles.link} to="">
            Corporates
          </Link>
          <Link className={styles.link} to="">
            Offers
          </Link>
          <Link className={styles.link} to="">
            Gift Cards
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
