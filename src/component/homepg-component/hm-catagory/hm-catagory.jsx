import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./hm-catagory.css"

const HomeCatagory = ({catagoryArr}) => {
  const navigate=useNavigate();
  return (
    <>
    <div className="home-catagory-container" >
        {
            catagoryArr.map((i)=>{
                return(
                    <>
                    <div className="home-catagory" key={i.id} onClick={()=> navigate(`/catagory${i.headTxt}`,{state:i.headTxt})} >
          <img src={i.img} alt="" className="home-catagory-img" />
          <div className="home-catagory-content-container">

          <div className="home-catagory-content">
            <div className="home-catagory-head-txt">
              {i.headTxt}
            </div>
            <div className="home-catagory-sub-txt">
            {i.subTxt}
            </div>
          </div>
          </div>
          </div>
                    </>
                )
            })
        }
          
        </div>
    </>
  )
}

export default HomeCatagory