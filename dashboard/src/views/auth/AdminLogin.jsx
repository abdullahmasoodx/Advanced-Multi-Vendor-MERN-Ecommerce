import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { admin_login } from "../../store/Reducers/authReducer";

const AdminLogin = () => {

  const dispatch  = useDispatch()

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state))
  };
  return (
    <div className="min-w-screen min-h-screen flex bg-[#38BAF0] items-center justify-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <div className="h-[70px] flex items-center justify-center">
            <div className="h-[50px] w-[180px]">
              <img className="w-full h-full" src="http://localhost:3000/images/logo.png" alt="logo" />
            </div>
          </div>
          <form onSubmit={submit}>
            <div className="flex flex-col w-full mb-3 gap-1">
              <label htmlFor="email">Email</label>
              <input
                className="px-3 py-2 outline-none border border-state-700 bg-transparent rounded-md"
                type="Email"
                onChange={inputHandler}
                value={state.email}
                name="email"
                placeholder="Email"
                id="email"
                required
              />
            </div>

            <div className="flex flex-col w-full mb-3 gap-1">
              <label htmlFor="password">Password</label>
              <input
                className="px-3 py-2 outline-none border border-state-700 bg-transparent rounded-md"
                type="Password"
                onChange={inputHandler}
                value={state.password}
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>

            <button className="bg-slate-800 w-full  hover:shadow-blue-300 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
