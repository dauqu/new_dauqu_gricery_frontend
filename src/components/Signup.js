import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEye } from 'react-icons/ai';

function Signup() {
  return (
    <div>
        <div className="w-[100vw] min-h-[100vh] flex items-center justify-center py-12">
            <div className='w-full max-w-[600px] p-12 border'>
                <p className='text-[48px] font-medium text-[#060C43]'>Sign Up</p>
                <p className='text-[16px] text-[#626476] mt-1'>Amet minim mollit non desert.</p>
            <form className="w-full" action="">
            <div className='mt-5'>
              <label className="text-[12px] font-normal text-[#626476] relative top-[10px] left-[10px] p-2 bg-white">Mobile Number</label>
              <input type="number" name="" className="border w-full h-[50px] outline-none px-3 placeholder:
              text-[#060C43] placeholder:text-[14px] placeholder:font-medium" placeholder="Enter Your Mobile Number"/>
            </div>
            <div className='mt-5'>
              <label className="text-[12px] font-normal text-[#626476] relative top-[10px] left-[10px] p-2 bg-white ">Create Password</label>
              <input type="text" name="" className="border w-full h-[50px] outline-none px-3 placeholder:
              text-[#060C43] placeholder:text-[14px] placeholder:font-medium" placeholder="Enter Your New Password"/>
            </div>
            <div className='mt-5'>
              <label className="text-[12px] font-normal text-[#626476] relative top-[10px] left-[10px] p-2 bg-white ">Full Name</label>
              <input type="text" name="" className="border w-full h-[50px] outline-none px-3 placeholder:
              text-[#060C43] placeholder:text-[14px] placeholder:font-medium" placeholder="Enter Your Full Name"/>
            </div>
            <div className='mt-5'>
              <label className="text-[12px] font-normal text-[#626476] relative top-[10px] left-[10px] p-2 bg-white ">Email</label>
              <input type="text" name="" className="border w-full h-[50px] outline-none px-3 placeholder:
              text-[#060C43] placeholder:text-[14px] placeholder:font-medium" placeholder="Enter Your Email (Optional)"/>
            </div>
            <div className='flex items-center justify-between mt-5'>
              <label className="text-[14px] font-normal text-[#626476]  p-2 bg-white block w-[160px] ">Select Gender</label>
              <div className='flex items-center '>
                <div className='flex items-center'>
                    <input type="radio" name="" className="border w-full h-[30px] border-[#00A15D] outline-none"/>
                    <label className="text-[14px] font-normal text-[#626476] ml-2">Male</label>
                </div>
                <div className='flex items-center ml-5'>
                    <input type="radio" name="" className="border w-full h-[30px] border-[#00A15D] outline-none"/>
                    <label className="text-[14px] font-normal text-[#626476] ml-2">Female</label>
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <label className="text-[12px] font-normal text-[#626476] relative top-[10px] left-[10px] p-2 bg-white">Alternate Number</label>
              <input type="number" name="" className="border w-full h-[50px] outline-none px-3 placeholder:
              text-[#060C43] placeholder:text-[14px] placeholder:font-medium" placeholder="Enter Your Alternate Mobile Number"/>
            </div>
            
            <div className="mt-[70px] m-auto">
            <Link to="/evaluation" className="text-[#232323] font-bold">
              <input type="submit" value="Continue" className="h-[45px] bg-[#00A15D] text-white w-full text-[][14px] font-medium"/>
            </Link>
            </div>
            <Link to="/Signin" className="cursor-pointer"><p className='text-[14px] leading-[30px] text-center font-medium text-[#060C43]'>have an account?&nbsp;<b className='font-medium text-[#00A15D]'>Sign In</b></p></Link>
            
            </form>
            </div>
        </div>
    </div>
  )
}

export default Signup;