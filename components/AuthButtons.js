import React from "react";

function AuthButtons() {
  return (
    <div className={`flex flex-col lg:flex-row px-2 mt-4 gap-4  `}>
      <button className="text-yellow-500 h-12 justify-center  border border-yellow-500 px-6 rounded ">
        Login
      </button>
      <button className="text-white h-12 justify-center bg-yellow-400 border border-yellow-500 px-6 rounded">
        Sign Up
      </button>
    </div>
  );
}

export default AuthButtons;
