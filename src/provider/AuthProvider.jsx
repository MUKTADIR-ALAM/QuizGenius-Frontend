import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  const createUserWithEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider)
    
  };

  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(false)
    return signOut(auth);
  };

  const updateUserProfile = (updatedUser) => {
    return updateProfile(auth.currentUser, updatedUser);
  };

  const forgetPass = (email) => {
    return sendPasswordResetEmail(auth, email)
  
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    createUserWithEmailPass,
    updateUserProfile,
    logInUser,
    signOutUser,
    signInWithGoogle,
    forgetPass,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}
