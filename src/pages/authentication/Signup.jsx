import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Signup = () => {

  const [signupData , setSignupData] = useState({
       name:"",
       email:"",
       password:"",
       confirmPassword:""
  });

  const handleChange=(e)=>{
    setSignupData({
      ...signupData,
      [e.target.name] : e.target.value
    })
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!signupData.name || !signupData.email || !signupData.password || !signupData.confirmPassword){
      return alert("please fill all fileds.")
    }

    if( signupData.password !== signupData.confirmPassword){
      return alert("password and confirm password not same.")
    }

    console.log(signupData);
    setSignupData({
        name:"",
       email:"",
       password:"",
       confirmPassword:""
    })
    
  }


  return (
    <form
    onSubmit={handleSubmit}
    className="flex items-center justify-center min-h-screen overflow-y-hidden">
      
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-5 gap-3  h-[53%]  md:h-[40%] md:w-[59%]  lg:h-[60%] lg:w-[30%] xl:h-[59%] xl:w-[30%] 2xl:h-[59%] 2xl:w-[30%]">
        <p className="text-2xl text-center font-semibold">Welcom To TalkTo</p>
        <legend className="fieldset-legend text-3xl">Sign Up</legend>
         <label className="label text-xl py-2">Name</label>
        <input
          type="text"
          className="input h-12 w-full"
          placeholder="Enter your full name"
          name='name'
          value={signupData.name}
          onChange={handleChange}
        />

        <label className="label text-xl py-1">Email</label>
        <input
          type="email "
          className="input h-12 w-full"
          placeholder="Email"
          name='email'
          value={signupData.email}
          onChange={handleChange}
        />

        <label className="label text-xl py-1">Password</label>
        <input
          type="password"
          className="input h-12 w-full"
          placeholder="Password"
          name='password'
          value={signupData.password}
          onChange={handleChange}
        />
        <label className="label text-xl py-1">Confirm Password</label>
        <input
          type=" password"
          className="input h-12 w-full"
          placeholder=" Confirm Password"
          name='confirmPassword'
          value={signupData.confirmPassword}
          onChange={handleChange}
        />

        <button type='submit' className="btn btn-neutral mt-3 h-12 text-2xl">SignUp</button>
        <p className="">
          Already have a account..?
          <span className="mx-1 underline text-blue-700">
            <NavLink to={"/Login"}>Login</NavLink>
          </span>
        </p>
      </fieldset>
    </form>
  );
}

export default Signup;
