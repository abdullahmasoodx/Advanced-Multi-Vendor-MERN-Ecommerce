import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, clearMessages } from "../../store/Reducers/authReducer";
import {PropagateLoader} from 'react-spinners' 
import { toast } from "react-hot-toast";
import {useNavigate} from 'react-router-dom'

const AdminLogin = () => {

  const dispatch  = useDispatch()
  const navigate = useNavigate()

  const {loader,errorMessage,successMessage} = useSelector((state) => state.auth);

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e)  => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state))
  };

  const overrideStyle ={
    display: "flex",
    margin: "0 auto",
    height: "24px",
    justifyContent: "center",
    alignItems: "center",
  }

  useEffect(() => {
    if(errorMessage){
         toast.error(errorMessage)
         dispatch(clearMessages())
    }
    if(successMessage){
      toast.success(successMessage)
       dispatch(clearMessages())
       navigate("/")
    }
  },[errorMessage,dispatch,successMessage])

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

            <button disabled={loader ? true: false} className="bg-slate-800 w-full  hover:shadow-blue-300 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">
             {
               loader ? <PropagateLoader color="#fff" cssOverride={overrideStyle} /> : 'Login'
             }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
