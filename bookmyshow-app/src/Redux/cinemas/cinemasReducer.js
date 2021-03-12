import React from "react";
import {
    GET_CINEMAS_FAILURE,
    GET_CINEMAS_REQUEST,
    GET_CINEMAS_SUCCESS
} from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    cinemas_data: []
}

export const cinemasReducer = (state = initState, {
    type,
    payload
}) => {
    switch (type) {
        case GET_CINEMAS_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_CINEMAS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                cinemas_data: payload
            }
        }
        case GET_CINEMAS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default:
            return state
    }
}