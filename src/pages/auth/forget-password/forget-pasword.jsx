import React ,{useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { emailRecover} from '../../../app/actions/auth';
import {  setEmail,  setRecno } from '../../../app/feature/auth';
import "../auth.css"

const ForgetPassword = () => {
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
      <div className="auth">
      <div className="auth-logo">
        <img className="auth-logo-img" alt='' src={`${window.location.origin}/assets/logo.webp`}/>
        <span className="auth-brand">Interior</span>
      </div>
      <div className="auth-content">
        <div className="auth-head-txt">
          Recover Email 
        </div>
        <div className="auth-sub-txt">
          enter the email and recovary key 
        </div>
        <div className="auth-input-container">
            <div className="auth-Email auth-input-box">
              <span className="auth-input-head">Email</span>
              
              <input type="text" className="auth-input-email auth-input" placeholder='enter the email here' value={state.email} onChange={(e)=>dispatch(setEmail(e.target.value))} />
            </div>
            <div className="auth-password  auth-input-box">
              <span className="auth-input-head">recovery key</span>
              <input type="text" className="auth-input-password auth-input"  placeholder='enter the key here' value={state.recNo} onChange={(e)=>dispatch(setRecno(e.target.value))}/>
            </div>
            {/* <div className="auth-remberme">
            <label className="auth-checkbox-head">
              <input type="checkbox" className="auth-checkbox"  onChange={(e)=>{
                e.target.checked?dispatch(setRemberMe(true)):dispatch(setRemberMe(false))
              }}/>
              rember me</label>
            </div> */}
            <div className="auth-btn-container">
              {/* <button className="auth-btn auth-btn-secondary" onClick={()=>dispatch(guestLogin())}>Guest</button> */}
              <button className="auth-btn auth-btn-primary" onClick={()=>{
                dispatch(emailRecover());
                if (state.token) {
                  navigate("/",{replace:true})
                }
                
              }} >Recover</button>
            </div>
        </div>
      </div>
      <div className="auth-end-txt-container">
        <div className="auth-end-txt">
          if you know password then <a href="/login" className="auth-link">login</a>
        </div>
        <div className="auth-end-txt">
          if you don't have account <a href="/signup" className="auth-link">signup</a>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ForgetPassword