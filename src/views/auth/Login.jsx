import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';


const Login = () => {


    const [state,setState] = useState({
        email:"",
        password:"",
    })

    const inputHandler = (e)=>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }


    const submit = (e)=>{
        e.preventDefault()
        console.log(state)
    }
    return (
        <div className='min-w-screen min-h-screen flex bg-[#38BAF0] items-center justify-center'>
            <div className='w-[350px] text-[#ffffff] p-2'>
                <div className='bg-[#6f68d1] p-4 rounded-md'>
                    <h2 className='text-xl mb-3 font-bold'>
                     Welcome To Ecommerce
                    </h2>
                    <p className='text-sm mb-3 font-medium'>Please signin account</p>

                    <form onSubmit={submit}>

                    

                         <div className='flex flex-col w-full mb-3 gap-1'>
                            <label htmlFor="email">Email</label>
                            <input 
                            className='px-3 py-2 outline-none border border-state-700 bg-transparent rounded-md'
                            type='Email' onChange={inputHandler} value={state.email} name='email' placeholder='Email' id='email'required/>
                            
                        </div>


                          <div className='flex flex-col w-full mb-3 gap-1'>
                            <label htmlFor="password">Password</label>
                            <input 
                            className='px-3 py-2 outline-none border border-state-700 bg-transparent rounded-md'
                            type='Password' onChange={inputHandler} value={state.password} name='password' placeholder='Password' id='password'required/>
                            
                        </div>


                         <div className='flex  w-full mb-3 gap-3 '>
                            <input 
                            className='w-4 h-4 text-blue-600 overflow-hidden bg=gray-200 border border-gray-300 rounded focus:ring-blue-500' 
                            type='checkbox' name='checkbox' id='checkbox' required/>

                            <label htmlFor="checkbox" className='text-sm'>I agree to the <span className='underline'>Terms of Service</span> and <span className='underline'>Privacy Policy</span></label>
                        </div>
                        <button className='bg-slate-800 w-full  hover:shadow-blue-300 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Sign In</button>
                        <div className='flex item-center mb-3 gap-3 justify-center'>
                            <p>don't have an account?  <Link className="font-bold" to="/register"> Sign Up  </Link> </p>
                        </div>


                        <div className='w-full flex justify-center items-center mb-3'>
                            <div className='w-[45%] bg-slate-700 h-[1px]' ></div>
                            <div className='w-[10%] flex justify-center items-center'>
                                <span className='pb-1'>OR</span>
                            </div>
                            <div className='w-[45%] bg-slate-700 h-[1px]' ></div>
                        </div>

                        <div className='flex justify-center items-center gap-3'> 
                            <div className='w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                            <span><FaGoogle /></span></div>

                             <div className='w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                            <span><FaFacebook /></span></div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;