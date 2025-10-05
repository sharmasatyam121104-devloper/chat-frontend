import React from 'react';
import Logo from '../../components/Logo';
import { IoMdSearch } from "react-icons/io";
import User from "./User";
import { NavLink } from 'react-router-dom';

const MobileSidebar = () => {
  return (
    <div>
       <div className="w-full h-screen flex flex-col p-1  md:hidden ">
      {/* hidden on mobile, flex on md+ */}
      <div>
        <Logo />
      </div>
      <div className="my-2 w-full">
        <label className="input w-full">
          <IoMdSearch />
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <NavLink to={"/msg-container"}  className="h-full overflow-y-scroll">
        <User />
         <User />
          <User />

           <User />
            <User />
             <User />
              <User />
               <User />


                <User />

                 <User />
                  <User />
                   <User />
                    <User />


                     <User />





                      <User /> 
                      <User /> <User />

                       <User />
                        <User />

                         <User />
                          <User />
                           <User />
                            <User />
      </NavLink>
      <div className="h-18 flex items-center justify-between  p-6 rounded-2xl gap-29">
        <div className="avatar flex items-center mt-2 ">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2 flex items-center ">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <button className="btn btn-primary mt-1.5">LogOut</button>
      </div>
    </div>
    </div>
  );
}

export default MobileSidebar;
