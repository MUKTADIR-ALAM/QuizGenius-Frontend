import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase.config";
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
import {  doc, getDoc, updateDoc, setDoc, Timestamp } from "firebase/firestore";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lockError, setLockError] = useState("");
  

  const provider = new GoogleAuthProvider();

  const createUserWithEmailPass = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const userRef = doc(db, "users", email);
      await setDoc(userRef, {
        failedLoginAttempts: 0,
        lockUntil: null,
      });
    } catch (error) {
     console.error(error)
    }
  };
  

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
 
  const logInUser = async (email, password) => {
    try {
      const userRef = doc(db, "users", email);
      const userDoc = await getDoc(userRef);
  
      if (userDoc.exists()) {
        const userData = userDoc.data();
  
        // Check if the account is locked
        if (userData.lockUntil && userData.lockUntil instanceof Timestamp) {
          const lockUntilDate = userData.lockUntil.toDate();
          if (lockUntilDate > Date.now()) {
            const lockDuration = Math.round((lockUntilDate - Date.now()) / 60000); 
            const error = new Error(`Your account is locked. Please try again after ${lockDuration} minute(s).`);
            setLockError(error)
            error.type = "locked";  
            throw error;
          }
        }
  
        // Try to sign in the user
        await signInWithEmailAndPassword(auth, email, password);
        await updateDoc(userRef, {
          failedLoginAttempts: 0,
          lockUntil: null
        });
  
        return "Login successful!";
      } else {
        throw new Error('User not found!');
      }
    } catch (error) {
      const userRef = doc(db, "users", email);
      const userDoc = await getDoc(userRef);
  
      if (userDoc.exists()) {
        const userData = userDoc.data();
        let failedAttempts = userData.failedLoginAttempts || 0;
        let lockUntil = userData.lockUntil || null;
  
        failedAttempts++;
  
        if (failedAttempts >= 3) {
          if (!lockUntil || lockUntil < Date.now()) {
            lockUntil = Timestamp.fromMillis(Date.now() + 3 * 60 * 1000);
          }
        }
  
        await updateDoc(userRef, {
          failedLoginAttempts: failedAttempts,
          lockUntil
        });
      }
      throw error; 
    }
  };
  

  const signOutUser = () => {
    setLoading(false);
    return signOut(auth);
  };

  const updateUserProfile = (updatedUser) => {
    return updateProfile(auth.currentUser, updatedUser);
  };

  const forgetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

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
    lockError
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
