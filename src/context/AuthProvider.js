import { useContext, createContext, useState, useEffect } from "react";
import { auth } from './../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  function signUp(email, pass) {
    return createUserWithEmailAndPassword(auth, email, pass);
  }

  useEffect(() => {
    const unSubscribe = auth.onAuthSateChanged(user => {
      setCurrentUser(user);
    });
    return unSubscribe;
  }, []);

  const value = { currentUser, signUp };
  return (
    <AuthContext.Provider value={{ value }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;