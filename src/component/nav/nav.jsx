import React from 'react'
import "./nav.css"
import logo from "../../assets/logo.webp"
import {AiOutlineMenu} from "react-icons/ai"
import {BiUserCircle} from "react-icons/bi"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { logoutUser } from '../../app/feature/auth'
import { setSideNav } from '../../app/feature/product'


const Nav = () => {
  const navigate=useNavigate();
  const state=useSelector(store=>store.auth);
  const ProdState=useSelector(store=>store.products);
  const dispatch=useDispatch();
  return (
    <>
    <div className="nav-container">
      <div className="nav-brand-container" onClick={()=>navigate("/")}>
        <img src={logo} alt="" className='nav-brand-logo' />
        <div className="nav-brand-name">Interior</div>
      </div>
      <ul className="nav-list">
        <li className="nav-list-item" onClick={()=>navigate("/")}>Home</li>
        <li className="nav-list-item" onClick={()=>navigate("/cart")}>Cart</li>
        <li className="nav-list-item"  onClick={()=>navigate("/wishlist")}>Wishlist</li>
        <li className="nav-list-item" onClick={()=>navigate("/shop")}>Shop</li>
        {
          state.status?<li className="nav-list-item nav-user-profile" onClick={()=>navigate("/user")}><BiUserCircle/></li>:<li className="nav-list-item nav-login" onClick={()=>navigate("/login")}>Login</li>
        }
        
        <li className="nav-list-item nav-menu" onClick={()=>dispatch(setSideNav(!ProdState.sideNav))}><AiOutlineMenu/></li>
      </ul>
    </div>
    
    </>
  )
}

export default Nav