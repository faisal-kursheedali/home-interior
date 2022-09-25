import React from 'react'
import "./hm-emply.css"

const HomePgEmply = ({emplyArr}) => {
  return (
    <>
    <div className="home-emply-container">
      {
         emplyArr.map((i,index)=>{
          return<div className="home-emply-box" key={index}>
            <img src={i.img} alt="" className="home-emply-img"/>
            <div className="home-emply-detail">
              <div className="home-emply-name">{i.name}</div>
              <div className="home-emply-position">{i.position}</div>
            </div>
          </div>
        })
      }
      </div>
          
    
    </>
  )
}

export default HomePgEmply