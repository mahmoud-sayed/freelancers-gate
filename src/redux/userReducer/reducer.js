import { ADD_USER, GET_USERS, EDIT_USER, DELETE_USER } from './types';


const initialState = { users: [] };

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_USERS:
      return state;

    case ADD_USER:
      return state;

    case EDIT_USER:
      return state;

    case DELETE_USER:
      return state;

    default:
      return state;
  }
};

export default usersReducer;