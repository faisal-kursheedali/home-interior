import React from 'react'
import Rating from '../../rating/rating'
import "./prod-rel-card.css"

const ProdRelCard = ({data}) => {
  return (
    <div className="prod-rel-card-component">
        <img src={data.img} alt="" className="prod-rel-card-img" />
        <div className="prod-rel-card-content">
            <div className="prod-rel-card-name">{data.name}</div>
            <div className="prod-rel-card-price">{data.price}</div>
            <div className="prod-rel-card-rating">
                <Rating rating={data.rating}/>
            </div>
            <div className="prod-rel-card-input">
              <div className="prod-rel-card-cart">add to cart</div>
              <div className="prod-rel-card-wishlist">add to wishlist </div>
            </div>
        </div>
    </div>
  )
}

export default ProdRelCard