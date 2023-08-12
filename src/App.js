import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Pages/LoginPage";
import UsersList from "./Pages/UsersList";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import Main from "./Main";
import { useState } from "react";
function App() {
  const[obj, setObj] = useState([]);
  const addRoom=(myRoom)=>{
    setObj([...obj, myRoom])
  }
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="Main" element={<Main />} />

        <Route path="/Pages/HomePage" element={<HomePage addRoom={addRoom}/>} />
        <Route path="/Pages/UsersList" element={<UsersList obj={obj}  />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
