import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./hm-header.css"

const HomemHeader = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className="home-header-container">
            <div className="home-header-text">
              Buy all your interior at one place.
            </div>
            <button className="home-header-btn" onClick={()=>navigate("/shop")}>EXPLORE</button>
        </div>
    </>
  )
}

export default HomemHeader