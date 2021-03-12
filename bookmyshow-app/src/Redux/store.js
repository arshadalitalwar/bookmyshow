import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer } from "./app/reducer";
import { movieReducer } from "./data/reducer";
import { foodReducer } from "./food/reducer";

const rootReducer = combineReducers({
  app: reducer,
  data: movieReducer,
  food: foodReducer,
});
const logger = (store) => (next) => (action) => {
  return typeof action === "function"
    ? action(store.dispatch, store.getState)
    : next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);
export { store };
