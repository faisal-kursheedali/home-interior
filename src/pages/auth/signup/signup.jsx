import React from 'react'
import "../auth.css"

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-logo">
        <img className="auth-logo-img" src={`${window.location.origin}/assets/logo.webp`}/>
        <span className="auth-brand">Interior</span>
      </div>
      <div className="auth-content">
        <div className="auth-head-txt">
          Signup
        </div>
        <div className="auth-sub-txt">
          enter all the value to Signup 
        </div>
        <div className="auth-input-container">
            <div className="auth-name auth-input-box">
              <span className="auth-input-head">Name</span>
              
              <input type="text" className="auth-input-name auth-input" placeholder='enter the name here'  />
            </div>
            <div className="auth-Email auth-input-box">
              <span className="auth-input-head">Email</span>
              
              <input type="text" className="auth-input-email auth-input" placeholder='enter the email here'  />
            </div>
            <div className="auth-password  auth-input-box">
              <span className="auth-input-head">Password</span>
              <input type="text" className="auth-input-password auth-input" placeholder='enter the password here'  />
            </div>
            <div className="auth-remberme">
            <label className="auth-checkbox-head">
              <input type="checkbox" className="auth-checkbox" />
              rember me</label>
            </div>
            <div className="auth-btn-container">
              <button className="auth-btn auth-btn-secondary">Guest</button>
              <button className="auth-btn auth-btn-primary">Signup</button>
            </div>
        </div>
      </div>
      <div className="auth-end-txt-container">
        <div className="auth-end-txt">
          if you <a href="#" className="auth-link">forget password</a>
        </div>
        <div className="auth-end-txt">
          if you dont have account <a href="#" className="auth-link">signup</a>
        </div>
        </div>
    </div>
  )
}

export default Signup