import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../../app/feature/auth';
import {useNavigate} from"react-router-dom";
import "./user.css"

const User = () => {
  const dispatch=useDispatch();
  const authState=useSelector(store=>store.auth);
  const navigate=useNavigate();
  return (
    <div className="user-profile-container">
      <div className="user-profile-card">
        <div className="user-profile">
          {authState.name.fName.charAt(0)}
        </div>
        <div className="user-profile-content">
          <div className="user-name user-info">{`${authState.name.fName} ${authState.name.lName}`}</div>
          <div className="user-email user-info">{authState.email}</div>
        </div>
      </div>
      <div className="user-profile-btn">
        <button className="user-logout-btn" onClick={()=>dispatch(logoutUser())}>Logout</button>
        <button className="user-explore-btn" onClick={()=>navigate("/shop")}>Explore</button>
      </div>
    </div>
  )
}
export default User;
