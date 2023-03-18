import React from "react"
import { Route, Routes } from "react-router-dom";
import Account from "./Account";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";
import { AuthContextProvider } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <h1 className="text-center text-3xl font-bold">
        Does It Go?
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>} 
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
