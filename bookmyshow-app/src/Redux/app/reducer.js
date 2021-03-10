import React from "react";
import { GET_MOVIES_FAILURE, GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS } from "./actionTypes";

const initState = {
    movies_data: [],
    isLoading: false,
    isError: false
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
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
        default:
            return state
    }
}