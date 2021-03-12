import * as actionType from "./actionTypes";

const initState = {
  foods: [],
  isError: false,
  isLoading: false,
  foodArray:[],
};

export const foodReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_FOOD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.GET_FOOD_SUCCESS:
      return {
        ...state,
        foods: action.payload,
        isLoading: false,
      };
    case actionType.GET_FOOD_FAILURE:
      return {
        ...state,
        isError: true,
      };
    case actionType.SELECTED_FOOD:
      return {
        ...state,
        foodArray: action.selectedFood
      }

    default:
      return state;
  }
};
