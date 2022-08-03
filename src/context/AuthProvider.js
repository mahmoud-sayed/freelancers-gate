import { useContext, createContext, useState, useEffect } from "react";
import { auth } from './../firebase/firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from 'firebase/auth';
import SetCookies from "../components/CookiesHandling/setCookies";
import GetCookies from "../components/CookiesHandling/getCookies";
import RemoveCookies from "../components/CookiesHandling/removeCookies";

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

  function logOut() {
    return signOut(auth);
  };

  function forgetPass(email) {
    return sendPasswordResetEmail(auth, email);
  }
  function googleSignIn() {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  }
  function faceBookSignIn() {
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookProvider);
  }
  useEffect(() => {
    const unSubScribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubScribe();
    };
  }, []);


  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        user,
        logOut,
        googleSignIn,
        faceBookSignIn,
        forgetPass
      }}>
      {children}
    </AuthContext.Provider>
  );
};



export default AuthContext;