import React, { createContext, useState, useContext, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { ref, set } from "firebase/database";

const UserAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  function handleLogin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function handleSignUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  function handleLogout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsInitialized(true);
      if (currentUser) {
        const { uid, providerData } = currentUser;
        const current = new Date().getTime();
        const dbRef = ref(db, `User_Info/Users/${uid}`);
        set(dbRef, {
          Info: providerData[0],
          Time: current,
        });
        localStorage.setItem("userUID", uid);
      }
    });

    // clean up function to unsubscribe from the auth state listener
    return unsubscribe;
  }, []);

  if (!isInitialized) {
    // Show loading spinner or something until Firebase is initialized
    return <div>Loading...</div>;
  }
  const value = {
    user,
    handleLogin,
    handleSignUp,
    handleLogout,
    handleGoogleSignIn,
  };

  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(UserAuthContext);
}
