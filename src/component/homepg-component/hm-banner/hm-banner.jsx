import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./hm-banner.css"

const HomePgBanner = ({data,rightSide}) => {
  const navigate=useNavigate();
  
  return (
    <>
    <div className="home-banner-container">
        {rightSide?"":<img src={data.img} alt="" className="home-banner-img" />}
          <div className="home-banner-content">
            <div className="home-banner-head">
              {data.offerHead}
            </div>
            <div className="home-banner-sub">
              {data.desc}
            </div>
            <div className="home-banner-small" style={{color: data.smallClr?data.smallClr:"red"}}>
              {data.offerSub}
            </div>
            <div className="home-banner-link" onClick={()=>navigate(`/product${data._id}`,{state:data})} 
            >buy now</div>
          </div>
        {rightSide?<img src={data.img} alt="" className="home-banner-img"/>:"" }
        </div>
    
    </>
  )
}

export default HomePgBanner