import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, putMovies } from "../../Redux/data/actions";
import { useHistory, useParams } from "react-router-dom";
import "../../Components/MoviePage/moviePage.css";
import Carousel from "react-elastic-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { RecommendedMovies } from "../../Components/HomePage/RecommendedMovies";
import Login from "../LoginPage";
import { storeAuth } from "../../Redux/app/actions";

function valuetext(value) {
  return `${value}`;
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    height: "400px",
    width: "300px",
  },
  root: {
    width: 250,
    margin: 20,
    textAlign: "center",
  },
}));

const MoviePage = () => {
  const [rValue, setRvalue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const { id } = useParams();
  const data = useSelector((state) => state.data.movies.data);
  const dispatch = useDispatch();
  const history = useHistory();
  const [action, setAction] = React.useState(false);
  const isAuth = useSelector(state => state.app.isAuth)

  const [auth, setAuth] = React.useState(false);
  React.useEffect(() => {
    dispatch(getMovies(id));
    window.scrollTo(window.scrollX, 0);
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e, v) => {
    setRvalue(v);
  };
  const handleRating = () => {
    dispatch(
      putMovies(id, {
        rating: {
          percentage: data.rating.percentage,
          no_of_ratings: data.rating.no_of_ratings + 1,
        },
      })
    );
    setOpen(false);
  };

  const handleClick = () => {
    if (isAuth) {
      history.push(`/booktickets/${id}`)
      
    } else {
      alert("Please login to book your tickets")
      setAction(true)
    }
  }

  const handleCloseLogin = (number) => {
    if (+number === 7275584516) {
        setAuth(true)
        alert("Successfully Logged in")
    }
    else if (+number === 123456789) {
        setAuth(true)
        alert("Successfully Logged in")
    }else if (+number === "") {
        alert("Please type your number")
        handleCloseLogin(number)
    }
    else {
        alert("You are not registered")
    }
    setAction(false);
  }
    React.useEffect(() => {
      dispatch(storeAuth(auth))
  }, [auth])
  return (
    <div>
      {data && (
        <>
          <div
            className="container"
            style={{
              backgroundImage: `linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%),url(${data.cover_image_url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Login action={action} handleCloseLogin={handleCloseLogin} />
            <div className="container__card">
              <img src={data.banner_image_url} alt="title" />
            </div>
            <div className="container__movieDetail">
              <h1>{data.movie_name}</h1>
              <div className="container__movieDetail_rating">
                <img
                  src="https://www.leadingwithhonor.com/wp-content/uploads/2021/02/redheart.png"
                  alt="Rating"
                  style={{ width: 25 }}
                />
                <h1>{data.rating.percentage}%</h1>
                <p style={{ marginBottom: 0 }}>{Math.ceil(data.rating.no_of_ratings)} Ratings</p>
              </div>
              <div className="container__movieDetail_ratingButton">
                <div>
                  <h4 style={{ color: "white" }}>Add your rating and review</h4>
                  <p>Your ratings matter</p>
                </div>
                <div>
                  <button style={{ cursor: "pointer" }} onClick={handleOpen}>Rate Now</button>
                </div>
              </div>
              <div className="container__movieDetail_language">
                <div>
                  <p>2D</p>
                </div>
                <div>
                  <p>{data.languages}</p>
                </div>
              </div>
              <div style={{ color: "white", fontSize: 18 }}>
                <h5 style={{ color: "white", fontSize: 18 }}>
                  {`${data.movie_duration} - ${data.movie_genre.map(
                    (e) => " " + e.genre
                  )} - ${data.release_date}`}
                </h5>
              </div>
              <div className="BookButton">
                <button onClick={handleClick}>Book Tickets</button>
              </div>
            </div>
          </div>
          <div className="middleContainer">
            <div>
              <h1>About the movie</h1>
              <p>{data.about_movie}</p>
            </div>
            <hr />
            <div>
              <h1>Cast</h1>
              <Carousel itemsToShow={8} pagination={false}>
                {data.cast.map((e) => (
                  <div key={e.id}>
                    <div>
                      <img
                        className="carousel_image"
                        src={e.cast_image}
                        alt="e.cast_image"
                      />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <h4>{e.original_name}</h4>
                      <p>{e.character}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
            <hr />
            <div className="carousel">
              <h1>Crew</h1>
              <Carousel itemsToShow={8} pagination={false}>
                {data.crew.map((e) => (
                  <div key={e.id}>
                    <div>
                      <img
                        className="carousel_image"
                        src={e.crew_image}
                        alt="e.cast_image"
                      />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <h4>{e.name}</h4>
                      <p>{e.crew_position}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
            <hr />
          </div>
        </>
      )}
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div style={{ textAlign: "center", position: "relative" }}>
                <h5 style={{ margin: 0, padding: 0, marginTop: 10 }}>
                  How was the movies?
                </h5>
                <p style={{ margin: 0, padding: 0 }}>
                  {data && data.movie_name}
                </p>
                <button
                  onClick={handleClose}
                  style={{ position: "absolute", right: 10, top: 0 }}
                >
                  X
                </button>
              </div>
              <hr />
              <div className={classes.root}>
                <Typography id="discrete-slider" gutterBottom>
                  How would you rate the movie?
                </Typography>
                <Slider
                  onChange={handleChange}
                  defaultValue={10}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={100}
                  color="secondary"
                />

                <div
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    backgroundColor: "#f84464",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 60,
                    position: "relative"
                  }}
                >
                  <h1 style={{ color: "white", margin: 0, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    {rValue}%
                  </h1>
                </div>
              </div>
              <button
                onClick={handleRating}
                style={{
                  width: "80%",
                  margin: "30px",
                  height: 50,
                  fontSize: 18,
                  color: "white",
                  backgroundColor: "#f84464",
                  borderRadius: 10,
                  border: "none",
                  outline: "none",
                  cursor: "pointer"
                }}
              >
                Submit Rating
              </button>
            </div>
          </Fade>
        </Modal>
      </div>
      <RecommendedMovies></RecommendedMovies>
    </div>
  );
};

export default MoviePage;
