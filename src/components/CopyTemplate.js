import React from 'react'
import frameImage from '../assets/frame.png'
import Loginlogin from './Loginlogin'
import SingupForm from './SingupForm'


 const CopyTemplate = ({title , desc1 , desc2 , setIsLoggedIn , image , formtype }) => {
  return (
    <div>
        <div>
            <h1> {title} </h1>
            <p>
                <span> {desc1} </span>
                <span> {desc2} </span>
            </p>
            {
                formtype === "singUp" ? (<SingupForm setIsLoggedIn = {setIsLoggedIn} />) 
                                                        : (<Loginlogin setIsLoggedIn = {setIsLoggedIn} />)
            }
            <div>
                <div></div>
                <p>or</p>
                <div></div>
            </div>
            <button>
                <p>singup with google</p>
            </button>
        </div>
        <div>
            <img src={frameImage} alt='pattern' width={558} height={504} loading='lazy' />
        </div>
    </div>
  )
}
export default CopyTemplate
