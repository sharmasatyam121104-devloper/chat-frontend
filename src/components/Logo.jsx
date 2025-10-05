import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center  space-x-2 bg-gray-900 p-3 rounded-md shadow-lg">
      {/* Icon */}
      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
        T
      </div>

      {/* Text */}
      <span className="text-white text-2xl font-extrabold tracking-wide">
        TalkTo
      </span>
    </div>
  );
};

export default Logo;
