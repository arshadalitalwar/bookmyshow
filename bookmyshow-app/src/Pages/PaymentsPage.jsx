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
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
    {({ remainingTime }) => parseFloat(remainingTime / 60).toFixed(2) + "  Minutes"}
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
  console.log(booking_details);
  const dispatch = useDispatch();

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
  }

  console.log(state)
  return (
    <div>

      <Dialog fullScreen open={proceed} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <svg height="40" width="150">
                <image href="//in.bmscdn.com/webin/common/icons/bms.svg" width="150" height="40"></image>
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
            <div style={{ width: 'fit-content', margin: '20px auto', }}><Counter /></div>
          </div>
        </div>
      </Dialog>


      <Dialog
        open={state}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Your payment has been done"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
