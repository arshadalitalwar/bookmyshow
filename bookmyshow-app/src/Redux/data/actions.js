import * as actionType from "./actionTypes";
import axios from "axios";
const getMovieRequest = () => {
  return {
    type: actionType.GET_MOVIE_REQUEST,
  };
};

const getMovieSuccess = (payload) => {
  return {
    type: actionType.GET_MOVIE_SUCCESS,
    payload,
  };
};

const getMovieFailure = (error) => {
  return {
    type: actionType.GET_MOVIE_FAILURE,
    payload: {
      error: error,
    },
  };
};

export const getMovies = (id) => (dispatch) => {
  dispatch(getMovieRequest());
  return axios
    .get(`https://bookmyshow-clone-masai.herokuapp.com/movies/${id}`)
    .then((res) => {
      dispatch(getMovieSuccess(res.data));
    })
    .catch((err) => dispatch(getMovieFailure(err)));
};

export const putMovies = (id, param) => (dispatch) => {
  // console.log(id, param);
  // dispatch(getMovieRequest());
  return axios
    .patch(`https://bookmyshow-clone-masai.herokuapp.com/movies/${id}`, param)
    .then((res) => {
      dispatch(getMovies(id));
    })
    .catch((err) => dispatch(getMovieFailure(err)));
};