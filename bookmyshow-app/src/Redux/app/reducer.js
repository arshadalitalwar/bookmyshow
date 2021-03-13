import React from "react";
import { loadData, saveData } from "../../Utils/LocalStorage";
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

const initState = {
    movies_data: [],
    outdoor_events: [],
    laughter_events: [],
    popular_events: [],
    latest_events: [],
    isLoading: false,
    isError: false,
    city: "",
    isAuth: loadData("auth") || false
}



export const reducer = (state = initState, { type, payload, city, auth }) => {
    switch (type) {
        case "cityChange": {
            return {
                ...state,
                city: city
            }
        }
        case GET_MOVIES_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_MOVIES_SUCCESS: {
            return {
                ...state,
                movies_data: payload,
                isLoading: false
            }
        }
        case GET_MOVIES_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case GET_OUTDOOR_EVENTS_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_OUTDOOR_EVENTS_SUCCESS: {
            return {
                ...state,
                outdoor_events: payload,
                isLoading: false
            }
        }
        case GET_OUTDOOR_EVENTS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case GET_LAUGHTER_EVENTS_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_LAUGHTER_EVENTS_SUCCESS: {
            return {
                ...state,
                laughter_events: payload,
                isLoading: false
            }
        }
        case GET_LAUGHTER_EVENTS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case GET_POPULAR_EVENTS_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_POPULAR_EVENTS_SUCCESS: {
            return {
                ...state,
                popular_events: payload,
                isLoading: false
            }
        }
        case GET_POPULAR_EVENTS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case GET_LATEST_EVENTS_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_LATEST_EVENTS_SUCCESS: {
            return {
                ...state,
                latest_events: payload,
                isLoading: false
            }
        }
        case GET_LATEST_EVENTS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case "LOGIN-AUTH": {
            const updated = { auth: auth }
            saveData("auth", updated)
            return {
                ...state,
                isAuth: updated.auth
            }
        }
        default:
            return state
    }
}