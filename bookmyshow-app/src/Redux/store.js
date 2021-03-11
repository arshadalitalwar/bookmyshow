import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer } from "./app/reducer";
import { cinemasReducer } from "./cinemas/cinemasReducer";

const rootReducer = combineReducers({
    app: reducer,
    cinemas: cinemasReducer
})
const logger = store => (next) => (action) => {
    return typeof action === "function"
        ? action(store.dispatch, store.getState)
        : next(action);
}

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
export { store }