import React from 'react'
import CartCard from '../cart-card/cart-card'
import "./cart-list.css"

const CartList = ({data}) => {
  return (
    <>
    <div className="cart-list-containe">
      <ul className="cart-list">
        {
          data.map((i,index)=>{
            return(
              <>

              <li className="cart-list-item">
                <CartCard data={i}/>
              </li> 
              
              </>
            ) 
          })
        }
      </ul>
    </div>
    
    </>
  )
}

export default CartList