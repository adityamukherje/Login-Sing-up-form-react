import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    const[showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

  return (
    <form onSubmit={submitHandler} className=' flex flex-col mt-6 w-full gap-y-4 ' >
        <label className=' w-full '>
            <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>
                Email Address<sup className=' text-pink-200 '>*</sup>
            </p>
            <input 
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email id"
                name="email"
                className=' bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-[0.5rem] '
            />
        </label>

        <label className=' relative w-full '>
             <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>
                Password<sup className=' text-pink-200  '>*</sup>
            </p>
            <input 
                required
                type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className=' bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-[0.5rem] '
            />

            <span onClick={() => setShowPassword((prev) => !prev)}
              className=' absolute top-[38px] right-3 cursor-pointer '>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                                   (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className=' text-xs text-blue-100 ml-auto max-w-max '>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className=' bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 '>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm
