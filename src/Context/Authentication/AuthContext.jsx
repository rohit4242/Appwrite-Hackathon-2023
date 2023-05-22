import React, { createContext, useState, useContext } from "react";

import account from "../../appwriteConfig";
import { ID } from "appwrite";
import { useNavigate } from "react-router-dom";

const UserAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleLogin(email, password) {
    try {
      await account.createEmailSession(email, password);
      const user = await account.get();
      setUser(user);
      localStorage.setItem("userUID", user.$id);
    } catch (error) {
      console.log(error);
      setError("Please Enter Valid Details");
    }
  }

  async function handleSignUp(email, password, name) {
    try {
      await account.create(ID.unique(), email, password, name);
      const user = await account.get();
      setUser(user);
      localStorage.setItem("userUID", user.$id);
    } catch (error) {
      console.log(error);
      setError("Please Enter Valid Details");
    }
  }

  // const getCurrentUser = () => {
  //   return account.get();
  // };

  // const loadUser = async () => {
  //   const user = await getCurrentUser().catch((e) => console.log(e));
  //   console.log(user);
  //   setUser(user);
  // };
  async function handleLogout() {
    try {
      localStorage.clear();
      setUser(null);
      navigate("/signIn");
      await account.deleteSession("current");
    } catch (error) {
      console.log(error);
      setError("Something Wrong try again");
    }
  }
  // useEffect(() => {
  //   loadUser();
  // }, []);

  const value = {
    user,
    error,
    handleLogin,
    handleSignUp,
    handleLogout,
    setError,
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
