import React from 'react'
import CopyTemplate from '../components/CopyTemplate';
import LoginImage from '../assets/login.png'

 const Sucess = (setIsLoggedIn) => {
  return (
    <div>
      <CopyTemplate
        title="welcome back"
        desc1="buld skill for today , tomorrow and beyond"
        desc2="education to future proof ur carrer"
        image={LoginImage}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}
export default Sucess;
