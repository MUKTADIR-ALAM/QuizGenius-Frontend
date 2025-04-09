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
import {  doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

  const provider = new GoogleAuthProvider();

  const createUserWithEmailPass = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
  
      // Initialize user document in Firestore
      const userRef = doc(db, "users", email);
      await setDoc(userRef, {
        failedLoginAttempts: 0,
        lockUntil: null,
      });
    } catch (error) {
      console.error("Error creating user:", error);
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
        if (userData.lockUntil && userData.lockUntil > Date.now()) {
          const lockDuration = Math.round((userData.lockUntil - Date.now()) / 60000); // In minutes
          throw new Error(`Your account is locked. Please try again after ${lockDuration} minute(s).`);
        }
  
        // Attempt to log in
        await signInWithEmailAndPassword(auth, email, password);
  
        // Reset failed attempts and lock time on successful login
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
  
        // Increment failed attempts and lock account if needed
        failedAttempts++;
  
        if (failedAttempts >= 5) {
          // Only set the lockUntil if it's not already set or expired
          if (!lockUntil || lockUntil < Date.now()) {
            lockUntil = Date.now() + 3 * 60 * 1000; // Lock for 15 minutes
          }
        }
  
        // Update user data with failed attempts and lock time
        await updateDoc(userRef, {
          failedLoginAttempts: failedAttempts,
          lockUntil
        });
      }
      console.error(error.message);
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
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
