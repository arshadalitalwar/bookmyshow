import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import ClearIcon from '@material-ui/icons/Clear';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useDispatch, useSelector } from 'react-redux';
import Food from '../Components/SummeryPage/Food';
import FirstSection from '../Components/PaymentsPage/FirstSection';
import styles from '../Components/Styling/PaymentsPage.module.css'
import SecondSection from '../Components/PaymentsPage/SecondSection';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link, useHistory } from 'react-router-dom';

import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { getBookingDetails, postBookingDetails } from '../Redux/booking/action';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Counter = () => (

  <CountdownCircleTimer
    isPlaying
    duration={600}
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
  >
    {({ remainingTime }) => Math.floor(remainingTime / 60) + " : " + remainingTime % 60 + " Minutes"}
  </CountdownCircleTimer>
)

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    background: '#1F2533',

  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));




export default function FullScreenDialog({ proceed }) {
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const city = useSelector(state => state.app.city)
  const booking_details = useSelector(state => state.booking_details);
  const dispatch = useDispatch();
  const [counter, setCounter] = React.useState(true);

  const handleClose = () => {
    setState(false);
  };
  const handleChange = (e) => {

  }

  const handlePayment = () => {
    setState(true)
    dispatch(postBookingDetails(booking_details))
      .then(res => {
        if (res) {
          console.log("POSTED")
          dispatch(getBookingDetails());
        }
      })
    setTimeout(() => {
      setCounter(false);
    }, 2000)
  }
  const history = useHistory();
  const handleMove = () => {
    history.push("/")
  }

  console.log(state)
  return (
    <div>

      <Dialog fullScreen open={proceed} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <svg height="40" width="150">
                <Link to="/" ><image href="//in.bmscdn.com/webin/common/icons/bms.svg" width="150" height="40"></image></Link>
              </svg>
            </Typography>
          </Toolbar>
        </AppBar>


        <div className={styles.page}>
          <div className={styles.firstSection}>
            <FirstSection handlePayment={handlePayment} />
          </div>
          <div className={styles.secondSection}>
            <SecondSection />
            <div style={{ width: '80px', margin: '20px auto', fontSize: '20px', wordBreak: 'break-word' }}><Counter /></div>
          </div>
        </div>
      </Dialog >


      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={state}
        TransitionComponent={Transition}>
        {counter && <DialogTitle id="customized-dialog-title" style={{ background: '#F84464', color: 'white' }} onClose={handleClose}>
          Please hold tight we are getting your tickets ready.
        </DialogTitle>}
        <DialogContent dividers>
          {/* <img style={{width:'100%'}} src="https://cdn.dribbble.com/users/108183/screenshots/8286157/media/4b152d30e3d9ae5c87e019e448582495.gif" alt=""/> */}
          {counter ? <img style={{ width: '70%', margin: '0 15%' }} src="https://cdn.dribbble.com/users/801336/screenshots/10037782/media/d7f28f902699655bba0b75e34dd9eb44.gif" alt="" /> :
            <div style={{ textAlign: 'center', color: 'white', background: '#F84464', padding: '100px 50px', borderRadius: '5px' }}>
              <h1>Congratulations!</h1>
              <div style={{ fontSize: '20px' }}>We have got your tickets</div>
            </div>}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleMove} variant="contained" color="secondary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}
