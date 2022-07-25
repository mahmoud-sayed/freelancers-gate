import { async } from "@firebase/util";
import { addUser } from "../../firebase/services/userService";
import { ADD_USER, GET_USERS, EDIT_USER, DELETE_USER } from "./types";
import { useDispatch } from "react-redux";
import { getAllUsers } from './../../firebase/services/userService';



export const handelRegistrationSubmit = async (email, pass, policesAgreement, dispatch) => {

  const date = new Date();
  const todayDate = date.toLocaleDateString();

  try {
    const newUser = { email, pass, policesAgreement, date: todayDate };
    await addUser(newUser);
    dispatch({
      type: ADD_USER,
      payload: newUser
    });
  } catch (err) {
    console.log(err);

  }
};

export const fitchUser = async (dispatch) => {

  try {
    const response = await getAllUsers();
    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(data);
  } catch (err) {
    console.log(err);
  }

};
