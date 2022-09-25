import React from 'react'
import "./cart-checkout.css"

const CartCheckout = () => {
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
        78
      </div>
      <div className="cart-co-price">
        450 $
      </div>
      <button className="cart-co-button">Ckeck out</button>
    </div>
    </>
  )
}

export default CartCheckout