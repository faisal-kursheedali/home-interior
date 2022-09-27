import React ,{useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../../../app/actions/auth';
import { guestLogin, setEmail, setPassword, setRemberMe } from '../../../app/feature/auth';
import "../auth.css"

const Login = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const state=useSelector(store=>store.auth);
  const dispatch=useDispatch();
  useEffect(() => {
    if (state.status) {
      navigate(location.state||"/",{replace:true});
    }
  }, [navigate,state.status]);
  
  return (
    <div className="auth-container">
      <div className="auth-logo">
        <img className="auth-logo-img" alt='' src={`${window.location.origin}/assets/logo.webp`}/>
        <span className="auth-brand">Interior</span>
      </div>
      <div className="auth-content">
        <div className="auth-head-txt">
          Login
        </div>
        <div className="auth-sub-txt">
          enter all the value to login 
        </div>
        <div className="auth-input-container">
            <div className="auth-Email auth-input-box">
              <span className="auth-input-head">Email</span>
              
              <input type="text" className="auth-input-email auth-input" placeholder='enter the email here' value={state.email} onChange={(e)=>dispatch(setEmail(e.target.value))} />
            </div>
            <div className="auth-password  auth-input-box">
              <span className="auth-input-head">Password</span>
              <input type="password" className="auth-input-password auth-input"  placeholder='enter the password here' value={state.password} onChange={(e)=>dispatch(setPassword(e.target.value))}/>
            </div>
            <div className="auth-remberme">
            <label className="auth-checkbox-head">
              <input type="checkbox" className="auth-checkbox"  onChange={(e)=>{
                e.target.checked?dispatch(setRemberMe(true)):dispatch(setRemberMe(false))
              }}/>
              rember me</label>
            </div>
            <div className="auth-btn-container">
              <button className="auth-btn auth-btn-secondary" onClick={()=>dispatch(guestLogin())}>Guest</button>
              <button className="auth-btn auth-btn-primary" onClick={()=>{
                dispatch(loginUser(location.state));
                
              }} >Login</button>
            </div>
        </div>
      </div>
      <div className="auth-end-txt-container">
        <div className="auth-end-txt">
          if you <a href="/forgetpassword" className="auth-link">forget password</a>
        </div>
        <div className="auth-end-txt">
          if you dont have account <a href="/signup" className="auth-link">signup</a>
        </div>
        </div>
    </div>
  )
}

export default Login


// import { FormComp } from '../../../component'
  // <div className="login-content">
  //   <div className="login-head-txt">
  //     Login
  //   </div>
  //   <div className="login-sub-text">
  //     Enter the login details 
  //   </div>
  //   <div className="login-input-box">

      
  //   </div>
  // </div>


  /* <FormComp head={"Login"} sub={"Enter the vale to login"} input={[
    {
      headTxt:"name",
      placeholder:"enter the name here",
      checkbox:false
    },
    {
      headTxt:"password",
      placeholder:"enter the password here",
      checkbox:true,
      checkboxTxt:"Rember me",
      checkboxAction:()=>{
      }
    },
  ]} 
  button={
    [
      {
        btnTxt:"login",
        action:()=>{
          
        },
        btnType:"primary",
      },
      {
        btnTxt:"guest",
        action:()=>{
        },
        btnType:"secondary",
      }
      
    ]
  }
  /> */