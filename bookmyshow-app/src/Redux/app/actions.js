import {
    GET_LATEST_EVENTS_FAILURE,
    GET_LATEST_EVENTS_REQUEST,
    GET_LATEST_EVENTS_SUCCESS,
    GET_LAUGHTER_EVENTS_FAILURE,
    GET_LAUGHTER_EVENTS_REQUEST,
    GET_LAUGHTER_EVENTS_SUCCESS,
    GET_MOVIES_FAILURE,
    GET_MOVIES_REQUEST,
    GET_MOVIES_SUCCESS,
    GET_OUTDOOR_EVENTS_FAILURE,
    GET_OUTDOOR_EVENTS_REQUEST,
    GET_OUTDOOR_EVENTS_SUCCESS,
    GET_POPULAR_EVENTS_FAILURE,
    GET_POPULAR_EVENTS_REQUEST,
    GET_POPULAR_EVENTS_SUCCESS
} from "./actionTypes"
import axios from "axios";
export const cityRequest = (city) => {
    return {
        type: "cityChange",
        city
    }
}


// GET MOVIES-----------------------------------

const getMoviesRequest = () => {
    return {
        type: GET_MOVIES_REQUEST
    }
}
const getMoviesSuccess = (payload) => {
    return {
        type: GET_MOVIES_SUCCESS,
        payload
    }
}
const getMoviesFailure = (error) => {
    return {
        type: GET_MOVIES_FAILURE,
        error
    }
}

export const getMovies = () => (dispatch) => {
    dispatch(getMoviesRequest);
    return axios.get("https://bookmyshow-clone-masai.herokuapp.com/movies")
        .then(res => dispatch(getMoviesSuccess(res.data.data)))
        .catch(error => dispatch(getMoviesFailure(error)));
}


//GET OUTDOOR EVENTS---------------------------------------------

const getOutdoorEventsRequest = () => {
    return {
        type: GET_OUTDOOR_EVENTS_REQUEST
    }
}
const getOutdoorEventsSuccess = (payload) => {
    return {
        type: GET_OUTDOOR_EVENTS_SUCCESS,
        payload
    }
}
const getOutdoorEventsFailure = () => {
    return {
        type: GET_OUTDOOR_EVENTS_FAILURE
    }
}

export const getOutdoorEvents = () => dispatch => {
    dispatch(getOutdoorEventsRequest());
    return axios.get("https://bookmyshow-clone-masai.herokuapp.com/outdoor")
        .then(res => dispatch(getOutdoorEventsSuccess(res.data.data)))
        .catch(error => dispatch(getOutdoorEventsFailure(error)))
}
//GET LAUGHTER EVENTS---------------------------------------------

const getLaughterEventsRequest = () => {
    return {
        type: GET_LAUGHTER_EVENTS_REQUEST
    }
}
const getLaughterEventsSuccess = (payload) => {
    return {
        type: GET_LAUGHTER_EVENTS_SUCCESS,
        payload
    }
}
const getLaughterEventsFailure = () => {
    return {
        type: GET_LAUGHTER_EVENTS_FAILURE
    }
}

export const getLaughterEvents = () => dispatch => {
    dispatch(getLaughterEventsRequest());
    return axios.get("https://bookmyshow-clone-masai.herokuapp.com/laughter")
        .then(res => dispatch(getLaughterEventsSuccess(res.data.data)))
        .catch(error => dispatch(getLaughterEventsFailure(error)))
}
//GET POPULAR EVENTS---------------------------------------------

const getPopularEventsRequest = () => {
    return {
        type: GET_POPULAR_EVENTS_REQUEST
    }
}
const getPopularEventsSuccess = (payload) => {
    return {
        type: GET_POPULAR_EVENTS_SUCCESS,
        payload
    }
}
const getPopularEventsFailure = () => {
    return {
        type: GET_POPULAR_EVENTS_FAILURE
    }
}

export const getPopularEvents = () => dispatch => {
    dispatch(getPopularEventsRequest());
    return axios.get("https://bookmyshow-clone-masai.herokuapp.com/popular")
        .then(res => dispatch(getPopularEventsSuccess(res.data.data)))
        .catch(error => dispatch(getPopularEventsFailure(error)))
}

//GET LATEST EVENTS---------------------------------------------

const getLatestEventsRequest = () => {
    return {
        type: GET_LATEST_EVENTS_REQUEST
    }
}
const getLatestEventsSuccess = (payload) => {
    return {
        type: GET_LATEST_EVENTS_SUCCESS,
        payload
    }
}
const getLatestEventsFailure = () => {
    return {
        type: GET_LATEST_EVENTS_FAILURE
    }
}

export const getLatestEvents = () => dispatch => {
    dispatch(getLatestEventsRequest());
    return axios.get("https://bookmyshow-clone-masai.herokuapp.com/outdoor")
        .then(res => dispatch(getLatestEventsSuccess(res.data.data)))
        .catch(error => dispatch(getLatestEventsFailure(error)))
}




// Auth----------------------------------------


export const storeAuth = (auth) => {
   return {type: "LOGIN-AUTH",
    auth}
}