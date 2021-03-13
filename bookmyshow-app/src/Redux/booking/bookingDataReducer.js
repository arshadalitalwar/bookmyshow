import {
    ADD_BOOKING_DETAILS_FAILURE,
    ADD_BOOKING_DETAILS_REQUEST,
    ADD_BOOKING_DETAILS_SUCCESS,
    GET_BOOKING_DETAILS_FAILURE,
    GET_BOOKING_DETAILS_REQUEST,
    GET_BOOKING_DETAILS_SUCCESS
} from "./actionTypes"

const initState = {
    isLoading: false,
    isError: false,
    booking_data: []
}

export const bookingDataReducer = (state = initState, {
    type,
    payload
}) => {
    switch (type) {
        case ADD_BOOKING_DETAILS_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ADD_BOOKING_DETAILS_SUCCESS: {
            return {
                ...state,
                isLoading: false
            }
        }
        case ADD_BOOKING_DETAILS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case GET_BOOKING_DETAILS_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_BOOKING_DETAILS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                booking_data: payload
            }
        }
        case GET_BOOKING_DETAILS_FAILURE: {
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