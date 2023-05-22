import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const userId = localStorage.getItem("userUID");
  if (!userId) {
    return <Navigate to="signIn" />;
  }

  return children;
};

export default ProtectedRouter;
