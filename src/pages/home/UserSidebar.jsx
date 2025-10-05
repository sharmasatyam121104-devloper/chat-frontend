import React from "react";
import Logo from "../../components/Logo";
import { IoMdSearch } from "react-icons/io";
import User from "./User";
import { IoMdLogOut } from "react-icons/io";

const UserSidebar = () => {
  return (
    <>
    <div className="max-w-[20rem] min-w-[20rem] h-screen flex flex-col p-1 hidden md:flex pr-2 bg-gray-950">
      {/* hidden on mobile, flex on md+ */}
      <div className="">
        <Logo />
      </div>
      <div className="my-2">
        <label className="input">
          <IoMdSearch />
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="h-full overflow-y-scroll">
        <User />
      </div>
      <div className="h-18 flex items-center p-2 rounded-2xl gap-29">
        <div className="avatar flex items-center mt-2 ">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2 flex items-center ">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <button className="btn btn-primary mt-1.5">LogOut</button>
      </div>
    </div>




   
    </>
  );
};


export default UserSidebar;
