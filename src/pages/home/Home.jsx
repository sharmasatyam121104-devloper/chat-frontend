import React from 'react';
import { NavLink } from 'react-router-dom';
import UserSidebar from './UserSidebar';
import MessageContainer from './MessageContainer';

const Home = () => {
  return (
    <div className='flex overflow-y-hidden h-[95%] mb-2'>
      <UserSidebar />
      <MessageContainer/>
    </div>
  );
}

export default Home;
