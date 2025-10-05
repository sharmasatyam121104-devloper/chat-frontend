import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [loginData, setLogindata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogindata({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin= ()=>{
    console.log("login");
  }

  const handleSubmit = (e) => {
    if (!loginData.email || !loginData.password) {
    alert("Please fill in both email and password!");
    return; // submit stop
  }
    e.preventDefault();
    console.log(loginData);
    //clear all data after submit
    setLogindata({
    email: "",
    password: "",
  });

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center min-h-screen overflow-y-hidden"
    >
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-5 gap-4  h-[53%]  md:h-[40%] md:w-[59%]  lg:h-[60%] lg:w-[30%] xl:h-[59%] xl:w-[30%] 2xl:h-[59%] 2xl:w-[30%]">
        <p className="text-2xl text-center font-semibold">Welcom To TalkTo</p>
        <legend className="fieldset-legend text-3xl">Login</legend>

        <label className="label text-xl py-2">Email</label>
        <input
          type="email "
          name="email"
          className="input h-12 w-full"
          placeholder="Email"
          onChange={handleChange}
          value={loginData.email}
        />

        <label className="label text-xl py-2">Password</label>
        <input
          type="password"
          className="input h-12 w-full"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={loginData.password}
        />

        <button
        onClick={handleLogin}
        className="btn btn-neutral mt-4 h-12 text-2xl" type="submit">
          Login
        </button>
        <p className="">
          Don't have a account..?
          <span className="mx-1 underline text-blue-700">
            <NavLink to={"/signup"}>Sign Up</NavLink>
          </span>
        </p>
      </fieldset>
    </form>
  );
};

export default Login;
