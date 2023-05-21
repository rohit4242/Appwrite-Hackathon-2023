import React from "react";
import NotFound from "./Pages/NotFound";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { UserAuthContextProvider } from "./Context/Authentication/AuthContext";
import { Route, Routes } from "react-router-dom";
import ProtectedRouter from "./Router/ProtectedRouter";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route
          path="/*"
          element={
            <ProtectedRouter>
              <Dashboard />
            </ProtectedRouter>
          }
        />
        <Route path="*" element={<NotFound h1={"404"} />} />
      </Routes>
    </UserAuthContextProvider>
  );
};

export default App;
