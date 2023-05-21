import React from "react";
import { useUserAuth } from "../Context/Authentication/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const { user } = useUserAuth();

  if (!user) {
    return <Navigate to="signIn" />;
  }

  return children;
};

export default ProtectedRouter;