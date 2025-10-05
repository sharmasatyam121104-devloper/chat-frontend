import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/authentication/Signup";
import { useDispatch, useSelector } from 'react-redux'
// import { loginUserThunk } from "./store/slice/userSlice/user.thunk";
import Login from "./pages/authentication/Login";
import UserSidebar from "./pages/home/UserSidebar";
import MobileSidebar from "./pages/home/MobileSidebar";
import MessageContainer from "./pages/home/MessageContainer";
import Toaster from "react-hot-toast"

const App = () => {

  const state = useSelector(state=>state.user)
  const dispatch = useDispatch()
  // console.log(state);
  const user = useSelector(state => state.user);
console.log("User state:", user);


  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/signup"  element={<Signup/>} />
        <Route path="/mobile-sidebar"  element={<MobileSidebar/>} />
        <Route path="/msg-container"  element={<MessageContainer/>} />
      </Routes>
    </div>
  );
};

export default App;
