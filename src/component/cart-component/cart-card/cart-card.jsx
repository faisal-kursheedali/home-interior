import React from 'react'
import "./cart-card.css";
import { AiFillStar, AiOutlineStar,AiOutlineHeart,AiFillHeart } from "react-icons/ai"
import {BsFillCartFill,BsCart2 } from "react-icons/bs"
import Rating from '../../rating/rating';

const CartCard = ({ data }) => {
  return (
    <>
      <div className="cart-card-container">
        <img src={data.img} alt="" className="cart-card-img" />
        <div className="cart-card-content">
          <div className="cart-card-name">{data.name}</div>
          <div className="cart-card-price">{data.price}</div>
          <div className="cart-card-rating">
            <Rating rating={data.rating}/>

          </div>
          <input type="number" className="cart-card-input" placeholder='Number of items' />
          {/* <div className="cart-card-detail">
            <div className="cart-card-wishlist">
              {
                data.wishlist ? <AiFillHeart style={{ color: "red" }} /> : <AiOutlineHeart style={{ color: "red" }} />
              }

            </div>

            <div className="cart-card-cart">
              {
                data.cart ? <BsFillCartFill style={{ color: "blue" }} /> : <BsCart2 style={{ color: "blue" }} />
              }
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default CartCard