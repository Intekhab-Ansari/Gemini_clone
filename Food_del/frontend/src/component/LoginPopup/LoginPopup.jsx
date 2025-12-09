import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Sing Up")

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""/>
        </div>
        <div className='login-popup-inputs'>
            {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
            <input type="email" placeholder='Your Email' required/>
            <input type="password" placeholder='Password' required/>
        </div>
        <button>{currState==="Sing Up"?"Create account":"Login"}</button>
        <div className='Login-popup-condition'>
            <input type="checkbox" required />
            <p>By Continuing, i agree to the term of use & privacy policy.</p>
        </div>
        {currState==='Login'
        ?<p>Create new account? <span onClick={()=>setCurrState("Sing Up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
        
      </form>
    </div>
  )
}

export default LoginPopup
