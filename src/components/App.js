import React from "react"
import { Route, Routes } from "react-router-dom";
import Account from "./Account";
import Signin from "./Signin";
import Signup from "./Signup";
import Navbar from "./Navbar";
import Home from "./Home";
import { AuthContextProvider } from "../context/AuthContext";

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
        <Route path="/account" element={<Account />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
