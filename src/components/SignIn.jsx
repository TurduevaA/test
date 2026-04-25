import React from 'react'
import "../styles/SignIn.css"

const SignIn = () => {
  return (
    <div className='container'>
      <h2 className="h2">Sign In</h2>
      <p className="p1">Welcome back, you've been missed!</p>
      <div className="social-login">
      <button className="button1">
      <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google Icon" className="google-icon"/>
      Sign with Google</button>
      <button className="button2">
      <img src="https://cdn-icons-png.flaticon.com/512/179/179309.png" alt="Apple Icon" className="apple-icon"/>
      Sign with Apple</button>
      </div>

      <div className="divider">OR</div>
      <input className="input1" type="Email" placeholder='Your Email ' />
      <input  className="input2" type="password" placeholder='Your Password' />
      <button className="button3">Login</button>
      <p className="p2">Don't have an accaunt yet? Sign up</p>
      
    </div>
  )
}

export default SignIn
