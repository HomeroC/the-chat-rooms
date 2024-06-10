import React from "react";

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">The Chat Rooms</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button className="p-5 text-white font-bold bg-[#2f4f4f] rounded-md cursor-pointer">
            Sign In
          </button>
        </form>
        <p>Don't you have an account? Register</p>
      </div>
    </div>
  );
}

export default Login;
