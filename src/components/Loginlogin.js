import React from 'react'
import {AiOutlineEyeInvisible , AiOutlineEye} from 'react-icons/ai'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

 const Loginlogin = (setIsLoggedIn) => {
    const navigate = useNavigate()
    const[formData , setFormData] = useState({email : "" , password : ""})
    const[showPassword , setShowPassword] = useState(false)

    function changeHandler(event){
        setFormData((prevData) =>(
            {...prevData,[ event.target.name ]:  event.target.value })
        )  
    }

    function submitHandler(event){
        event.prventDefault()
        setIsLoggedIn(true)
        toast.success("Loggeed in")
        navigate('/Dashbord')
    }
  return (
    <form onSubmit={submitHandler} >
        <label>
            <p>
                Email Address <sub>*</sub>
            </p>
                <input type='text' value={formData.email} onChange={changeHandler} name='email' placeholder='Enter your email Id' required />
        </label>

        <label>
            <p>
                password <sub>*</sub>
            </p>
                <input type={showPassword ? ("text") : ("password") } value={formData.password} onChange={changeHandler}
                 placeholder='password' name='password' required />
        </label>
        <span onClick={()=> setShowPassword((prev) => !prev)} >
            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
        </span>
        <Link to='#'>
            <p>
                forgot password
            </p>
        </Link>
        <button>
            singUp
        </button>
    </form>
  )
}
export default Loginlogin