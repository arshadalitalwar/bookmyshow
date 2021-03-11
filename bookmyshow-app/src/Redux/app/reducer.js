import { GET_MOVIES_FAILURE, GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS } from "./actionTypes";

const initState = {
    movies_data: [],
    isLoading: false,
    isError: false,
    city: ""
}

export const reducer = (state = initState, { type, payload, city }) => {
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
            // console.log(payload.data)
            return {
                ...state,
                movies_data: payload.data,
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