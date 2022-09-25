import React from 'react'
import "./hm-catagory.css"

const HomeCatagory = ({catagoryArr}) => {
  return (
    <>
    <div className="home-catagory-container" >
        {
            catagoryArr.map((i)=>{
                return(
                    <>
                    <div className="home-catagory" key={i.id} >
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