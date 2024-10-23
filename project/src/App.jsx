import React from "react";
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Register from "./components/Register"
import Account from "./components/Account"


function App() {
 

  return (
    <>
      <div>
        <Navbar/>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/account" element={<Account/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
