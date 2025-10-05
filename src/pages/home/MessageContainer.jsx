import React, { useEffect, useRef } from 'react';
import User from './User';
import Massage from './Massage';
import { IoSendSharp } from "react-icons/io5";
import Logo from '../../components/Logo';
import { IoArrowBack } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const MessageContainer = () => {

  const laptopRef = useRef();
  const mobileRef = useRef();

  // Example messages array
  const messages = Array(15).fill(0);

  useEffect(() => {
    if (laptopRef.current) {
      laptopRef.current.scrollTop = laptopRef.current.scrollHeight;
    }
    if (mobileRef.current) {
      mobileRef.current.scrollTop = mobileRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Laptop */}
      <div className='w-full h-screen overflow-y-hidden flex flex-col hidden md:flex'>
        <div className="border-b border-b-white/10 flex justify-between mr-4">
          <User/> 
          <Logo/>
        </div>
        <div ref={laptopRef} className='h-full overflow-y-auto p-4 flex flex-col'>
          {messages.map((_, i) => <Massage key={i} />)}
        </div>
        <div className='w-full flex gap-5'>
          <input type="text" placeholder="Primary" className="input input-primary w-full p-6 px-6" />
          <button className="btn btn-active btn-primary h-full mr-2 w-[5%]"><IoSendSharp/></button>
        </div>
      </div>

      {/* Phone */}
      <div className='w-full h-screen overflow-y-hidden flex flex-col md:hidden '>
        <div className="border-b border-b-white/10 flex justify-between p-2">
        <NavLink className='text-4xl w-fit'
        to={"/mobile-sidebar"}
        >
          <IoArrowBack/>
        </NavLink>
          <div className='flex justify-between w-full'>
            <User/> 
          <Logo/>
          </div>
        </div>
        <div ref={mobileRef} className='h-full overflow-y-auto p-4 flex flex-col bg-gray-700 '>
          {messages.map((_, i) => <Massage key={i} />)}
        </div>
        <div className='w-full flex gap-5 p-8'>
          <input type="text" placeholder="Primary" className="input input-primary w-full p-6 px-6" />
          <button className="btn btn-active btn-primary h-full mr-2 w-[20%]"><IoSendSharp/></button>
        </div>
      </div>
    </>
  );
}

export default MessageContainer;
