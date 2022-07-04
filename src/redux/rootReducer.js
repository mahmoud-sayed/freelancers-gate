import { combineReducers } from "redux";
import jobReducer from './JobReducer/job-reducer';


const rootReducer = combineReducers({
  jobReducer
});

export default rootReducer;