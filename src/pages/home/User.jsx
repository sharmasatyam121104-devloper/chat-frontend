import React from 'react';

const User = () => {
  return (
    <div className='flex items-center gap-5 p-2 hover:bg-gray-400 bg-gray-800 cursor-pointer border-b border-b-white/10'>
      <div className="avatar avatar-online">
  <div className="w-12 rounded-full">
    <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
  </div>
</div>
<div className='flex flex-col  items-center'>
    <h2>fullname</h2>
<p>username</p>
</div>
    </div>
  );
}

export default User;
