import React from 'react'
import "./cart-card.css";
// import { AiFillStar, AiOutlineStar,AiOutlineHeart,AiFillHeart } from "react-icons/ai"
// import {BsFillCartFill,BsCart2 } from "react-icons/bs"
import Rating from '../../rating/rating';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../../app/actions/product';


const CartCard = ({ data }) => {
  const cart=useSelector(store=>store.products.cart)
  const dispatch=useDispatch();
  let count=0;
  cart.map(i=>i._id===data._id?count+=1:"");
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
          <input type="number" className="cart-card-input"  max={10} min={1} onChange={(e)=>{
            dispatch(removeFromCart(data._id));
            if(e.target.value>0){
            for (let i = 0; i < e.target.value; i++) {
              dispatch(addToCart(data));
              
            }
              // Array(1,e.target.value).forEach(_=>dispatch(addToCart(data)))
            }
          }} 
          placeholder={
            count===0?"Number of items":count
          }
          />
          <div className="cart-card-btn">
            <div className="cart-card-remove-btn" onClick={()=>{
              dispatch(removeFromCart(data._id))
            }}>
              Remove from cart
            </div>
          </div>
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