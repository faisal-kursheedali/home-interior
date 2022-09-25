import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./hm-banner.css"

const HomePgBanner = ({data,releated,index}) => {
  const navigate=useNavigate();
  return (
    <>
    <div className="home-banner-container">
        {data.rightSide?"":<img src={data.img} alt="" className="home-banner-img" />}
          <div className="home-banner-content">
            <div className="home-banner-head">
              {data.head}
            </div>
            <div className="home-banner-sub">
              {data.sub}
            </div>
            <div className="home-banner-small" style={{color: data.smallClr?data.smallClr:"red"}}>
              {data.small}
            </div>
            <a className="home-banner-link" href='/' 
            >buy now</a>
          </div>
        {data.rightSide?<img src={data.img} alt="" className="home-banner-img"/>:"" }
        </div>
    
    </>
  )
}

export default HomePgBanner