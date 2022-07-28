import { useContext, createContext, useState, useEffect } from "react";
import { auth } from './../firebase/firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

const AuthContext = createContext();

export function useUserAuth() { // to provide the useContext on the components to use it
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState('');

  function signUp(email, pass) {
    return createUserWithEmailAndPassword(auth, email, pass);
  }

  function signIn(email, pass) {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  useEffect(() => {
    const unSubScribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubScribe();
    };
  }, []);


  return (
    <AuthContext.Provider value={{ signUp, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
};



export default AuthContext;