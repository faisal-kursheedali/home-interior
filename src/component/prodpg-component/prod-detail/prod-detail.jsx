import React from 'react'
import Rating from '../../rating/rating'
import "./prod-detail.css"

const ProdDetail = ({data}) => {
  return (
    <>
    <div className="prod-detail-component">
      <img src={data.img} alt="" className="prod-detail-img" />
      <div className="prod-detail-content">
        <div className="prod-detail-name">
          {data.name}
        </div>
        <div className="prod-detail-desc">
          {data.desc}
        </div>
        <div className="prod-detail-price">
          {data.price}
        </div>
        <div className="prod-detail-rating">
          <Rating rating={data.rating}/>
        </div>
        <div className="prod-detail-btn">
          <button className="prod-detail-btn-cart">Cart</button>
          <button className="prod-detail-btn-wishlist">Wishlist</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProdDetail