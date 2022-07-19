import { combineReducers } from "redux";
import jobReducer from './JobReducer/job-reducer';
import usersReducer from "./userReducer/reducer";


const rootReducer = combineReducers({
  jobReducer,
  usersReducer
});

export default rootReducer;