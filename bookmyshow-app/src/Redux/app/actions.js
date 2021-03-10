import {
    GET_MOVIES_FAILURE,
    GET_MOVIES_REQUEST,
    GET_MOVIES_SUCCESS
} from "./actionTypes"
import axios from "axios";


const getMoviesRequest = () => {
    return {
        type: GET_MOVIES_REQUEST
    }
}
const getMoviesSuccess = (error) => {
    return {
        type: GET_MOVIES_SUCCESS
    }
}
const getMoviesFailure = (payload) => {
    return {
        type: GET_MOVIES_FAILURE,
        payload
    }
}

export const getMovies = () => (dispatch) => {
    dispatch(getMoviesRequest);
    return axios.get("http://localhost:8000")
        .then(res => dispatch(getMoviesSuccess(res.data)))
        .catch(error => dispatch(getMoviesFailure(error)));
}