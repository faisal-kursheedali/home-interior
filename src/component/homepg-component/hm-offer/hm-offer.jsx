import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./hm-offer.css"

const HomeOffer = ({
    offerHead,
    offerAlert,
    offerAlertColor,
    offerText,
    offerArr,

}) => {
  const navigate=useNavigate();
    const givenColor=offerAlertColor?offerAlertColor:"red"
  return (
    <>
    <div className="home-offer-box">

    <div className="home-offer-head">
    {offerHead}
    </div>
     <div className="home-offer-container">
          <div className="home-offer-txt">
            
            <span className="home-offer-small-txt" style={{color:givenColor}}>
              {offerAlert}
            </span>
            <span className="home-offer-small-txt">
              {offerText}
            </span>
          </div>
          <div className="home-offer-card-container">
            {
              offerArr.map((i)=>{
                return(
                  <div className="home-offer-card" key={i._id} onClick={()=>{
                    navigate(`/product${i._id}`,{state:i})
                  }}>
              <img src={i.img} alt="" className="home-offer-card-img" />
            </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeOffer