import React from 'react'
import "./nav.css"
import logo from "../../assets/logo.webp"
import {AiOutlineMenu} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../app/feature/auth'

const Nav = () => {
  const navigate=useNavigate();
  const state=useSelector(store=>store.auth);
  const dispatch=useDispatch();
  return (
    <>
    <div className="nav-container">
      <div className="nav-brand-container">
        <img src={logo} alt="" className='nav-brand-logo' />
        <div className="nav-brand-name">Interior</div>
      </div>
      <ul className="nav-list">
        <li className="nav-list-item" onClick={()=>navigate("/")}>Home</li>
        <li className="nav-list-item" onClick={()=>navigate("/cart")}>Cart</li>
        <li className="nav-list-item"  onClick={()=>navigate("/wishlist")}>Wishlist</li>
        <li className="nav-list-item" onClick={()=>navigate("/shop")}>Shop</li>
        {
          state.status?<li className="nav-list-item nav-login" onClick={()=>dispatch(logoutUser())}>Logout</li>:<li className="nav-list-item nav-login" onClick={()=>navigate("/login")}>Login</li>
        }
        
        <li className="nav-list-item nav-menu"><AiOutlineMenu/></li>
      </ul>
    </div>
    
    </>
  )
}

export default Nav