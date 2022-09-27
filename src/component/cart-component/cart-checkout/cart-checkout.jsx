import React from 'react'
import { useSelector } from 'react-redux'
import "./cart-checkout.css"
// import {IoIosShareAlt} from "react-icons/io"
import { 
  // Link,
  useNavigate} from 'react-router-dom'

const CartCheckout = () => {
  const navigate=useNavigate();
  const state=useSelector(store=>store.products);
  const authState=useSelector(store=>store.auth);

  const cart=state.cart;
  let totalAmount=0;
  cart.forEach(i=>totalAmount=totalAmount+Number(i.price));
  return (
    <>
    <div className="cart-co-container">
      <div className="cart-co-head">
        Check out
      </div>
      <div className="cart-co-items-head">
        number of items
      </div>
      <div className="cart-co-items-count">
        {cart.length}
      </div>
      <div className="cart-co-price">
       {`${totalAmount} $`} 
      </div>
      <button className="cart-co-button">Ckeck out</button>
      <div onClick={()=>{
        navigate(`/sharedcart${authState.token}`)
      }}  className="cart-co-share">share cart</div>
    </div>
    </>
  )
}

export default CartCheckout