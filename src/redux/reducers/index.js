import counterReducer from "./counter";
import loggerReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterReducer,
    loggerReducer
});

export default allReducers;