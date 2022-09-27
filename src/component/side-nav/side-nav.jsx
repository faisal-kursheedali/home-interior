import React from 'react'
import "./side-nav.css"
import { useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSideNav } from '../../app/feature/product'

const SideNav = () => {
    const state=useSelector(store=>store.auth);
    const navigate=useNavigate();
    const dispatch=useDispatch();
  return (
    <>
    <div className="sidenav-container">
        <ul className="sidenav-list">
            <li className="sidenav-list-item" onClick={()=>{
              
              navigate("/")
              dispatch(setSideNav(false))
              }}>home</li>
            <li className="sidenav-list-item" onClick={()=>{
              
              navigate("/shop")
              dispatch(setSideNav(false))
              }}>shop</li>
            <li className="sidenav-list-item" onClick={()=>{
              navigate("/cart")
              dispatch(setSideNav(false))
              }}>cart</li>
            <li className="sidenav-list-item" onClick={()=>{
              navigate("/wishlist")
              dispatch(setSideNav(false))
              }}>wishlist</li>
            {
                state.token?<li className="sidenav-list-item" onClick={()=>{
  
                  navigate("/user")
                dispatch(setSideNav(false))
                }}>profile</li>:<li className="sidenav-list-item" onClick={()=>{
  
                    navigate("/login")
                
                dispatch(setSideNav(false))
                  }}>login</li>
            }
            
        </ul>
    </div>
    </>
  )
}

export default SideNav