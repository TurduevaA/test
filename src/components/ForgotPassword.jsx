import React from 'react'
import '../styles/SignIn.css'

const ForgotPassword = () => {
  return (
    <div className='container'>
      <h2 className="h2">Forgot Password</h2>
      <p className="p1">Enter your details to recevie a  reset link</p>
      <div className="input-group">
        <span className="input-icon"></span>
        <input className="input1" type="Email" placeholder='Your Email ' />
      </div>
      <button className="button3">Submit</button>
      <p className="p2" style={{cursor:'pointer'}}>Back To Sign In</p>
    </div>
  )
};

export default ForgotPassword
