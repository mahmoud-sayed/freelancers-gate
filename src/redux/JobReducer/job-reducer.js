import { CREATE_NEW_JOB, DELETE_JOB, EDIT_JOB } from "./Job-types";

const jobInitialState = {};

const jobReducer = (state = jobInitialState, action) => {
  switch (action.type) {
    case CREATE_NEW_JOB:
      return state;
    case EDIT_JOB:
      return state;
    case DELETE_JOB:
      return state;

    default:
      return state;
  }
};

export default jobReducer;