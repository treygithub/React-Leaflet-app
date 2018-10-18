import { createStore, applyMiddleware, combineReducers  } from "redux";
import bikesReducer from "./ducks/bikeReducer";
import promiseMiddleware from "redux-promise-middleware";


export default createStore(
    combineReducers({
    bikesReducer,
    }),
    applyMiddleware(promiseMiddleware())
  );