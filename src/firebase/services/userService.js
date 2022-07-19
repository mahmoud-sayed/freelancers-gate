import { db } from "../firebaseConfig";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore/lite";

const usersCollection = collection(db, 'users');

// get all users to use it
export const getAllUsers = () => {
  return getDocs(usersCollection);
};

// adding new user into the data base
export const addUser = (newUser) => {
  return addDoc(usersCollection, newUser);
};

// edit the chosen user
export const editUser = (id, updatedData) => {
  const userDocs = doc(db, 'users', id);
  return updateDoc(userDocs, updatedData);
};

// delete chosen user
export const deleteUser = (id) => {
  const userDocs = doc(db, 'users', id);
  deleteDoc(userDocs);
};

// get single user
export const getSingleUser = (id) => {
  const userDocs = doc(db, 'users', id);
  getDoc(userDocs);
};
