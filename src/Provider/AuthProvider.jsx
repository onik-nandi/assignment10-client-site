import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // email password register

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in auth
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login

  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // update user

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  // Logout
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authData = {
    createUser,
    user,
    setUser,
    loading,
    setLoading,
    signIn,
    logOut,
    signInGoogle,
    updateUser,
  };
  // return <AuthContext value={authData}>{children}</AuthContext>;
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  ); // <-- CORRECT
};

export default AuthProvider;
