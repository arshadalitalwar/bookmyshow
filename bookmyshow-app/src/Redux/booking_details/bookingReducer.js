import {
    ADD_DATE_DAY,
    ADD_MOVIE_NAME,
    ADD_NAME_TIME,
    ADD_SEATS_DATA,
    ADD_TOTAL_PRICE
} from "./actionTypes"

const initState = {
    movie_name: "",
    date: "",
    day: "",
    time: "",
    cinemas_name: "",
    silver: [],
    platinium: [],
    price: 0,
    total_price: 0,
    banner_image_url: "",
    movie_grade: ""
}

export const bookingReducer = (state = initState, {
    type,
    payload
}) => {
    switch (type) {
        case ADD_MOVIE_NAME: {
            return {
                ...state,
                ...payload
            }
        }
        case ADD_DATE_DAY: {
            return {
                ...state,
                ...payload
            }
        }
        case ADD_NAME_TIME: {
            return {
                ...state,
                ...payload
            }
        }
        case ADD_SEATS_DATA: {
            return {
                ...state,
                ...payload
            }
        }
        case ADD_TOTAL_PRICE: {
            return {
                ...state,
                total_price: payload
            }
        }
        default:
            return state
    }
}