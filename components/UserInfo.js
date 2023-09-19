import React from 'react';

const UserInfo= () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">Dip</h2>
        <p className="text-gray-600">Dip@gmail.com</p>
      </div>
      <div className="px-4 pb-4">
        <button
          // onClick={onLogout}
          className="block w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg focus:outline-none"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserInfo;