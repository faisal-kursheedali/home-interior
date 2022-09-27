import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { SignupUser } from '../../../app/actions/auth';
import {  setEmail, setFname, setLname, setPassword, setRecno, setRemberMe } from '../../../app/feature/auth';
import "../auth.css"

const Signup = () => {
  const authState=useSelector(store=>store.auth);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  
  return (
    <div className="auth-container">
      <div className="auth-logo">
        <img className="auth-logo-img" alt='' src={`${window.location.origin}/assets/logo.webp`}/>
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
            <div className="auth-fname auth-input-box">
              <span className="auth-input-head">First name</span>
              
              <input type="text" onChange={(e)=>dispatch(setFname(e.target.value))} value={authState.name.fname} className="auth-input-name auth-input" placeholder='enter the name here'  />
            </div>
            <div className="auth-lname auth-input-box">
              <span className="auth-input-head">Last name</span>
              
              <input type="text" onChange={(e)=>dispatch(setLname(e.target.value))} value={authState.name.lname} className="auth-input-name auth-input" placeholder='enter the name here'  />
            </div>
            <div className="auth-Email auth-input-box">
              <span className="auth-input-head">Email</span>
              
              <input type="text" onChange={(e)=>dispatch(setEmail(e.target.value))} value={authState.email} className="auth-input-email auth-input" placeholder='enter the email here'  />
            </div>
            <div className="auth-password  auth-input-box">
              <span className="auth-input-head">Password</span>
              <input type="password" onChange={(e)=>dispatch(setPassword(e.target.value))} value={authState.password} className="auth-input-password auth-input" placeholder='enter the password here'  />
            </div>
            <div className="auth-secure  auth-input-box">
              <span className="auth-input-head">Security key</span>
              <input type="text" onChange={(e)=>dispatch(setRecno(e.target.value))} value={authState.recNo} className="auth-input-password auth-input" placeholder='enter the password here'  />
            </div>
            <div className="auth-remberme">
            <label className="auth-checkbox-head">
              <input type="checkbox" className="auth-checkbox" onChange={(e)=>{
                e.target.checked?dispatch(setRemberMe(true)):dispatch(setRemberMe(false))
              }} />
              rember me</label>
            </div>
            <div className="auth-btn-container">
              <button className="auth-btn auth-btn-secondary" onClick={()=>navigate("/login",{replace:true})}>
                Login</button>
              <button className="auth-btn auth-btn-primary"
              onClick={()=>{
                dispatch(SignupUser())
                if (authState.token) {
                  navigate("/",{replace:true})
                }
              }}>Signup</button>
            </div>
        </div>
      </div>
      <div className="auth-end-txt-container">
        <div className="auth-end-txt">
          if you have account <a href="/login" className="auth-link">login</a>
        </div>
        </div>
    </div>
  )
}

export default Signup