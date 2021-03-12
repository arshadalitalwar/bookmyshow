import {
    ADD_DATE_DAY,
    ADD_MOVIE_NAME,
    ADD_NAME_TIME
} from "./actionTypes"

const initState = {
    movie_name: "",
    date: "",
    day: "",
    time: "",
    cinemas_name: ""
}

export const bookingReducer = (state = initState, {
    type,
    payload
}) => {
    switch (type) {
        case ADD_MOVIE_NAME: {
            return {
                ...state,
                movie_name: payload
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
        default:
            return state
    }
}