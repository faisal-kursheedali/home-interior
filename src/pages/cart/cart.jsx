import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../app/actions/product'
import { CartCheckout, CartCheckoutMob, CartList } from '../../component'
import "./cart.css"

const Cart = () => {
  const state=useSelector(store=>store.products);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getCart());

  },[dispatch])
  // useEffect(()=>{
  //   console.log(state.cart);
  // },[state.cart])
  // const data=[
  //   {
  //     _id:100,
  //     name:"sofa",
  //     img:`${window.location.origin}/assets/home/home-header.jpg`,
  //     price:"RS 4500",
  //     desc:"plz by this product for my company development",
  //     rating:3.5,
  //     wishlist:true,
  //     cart:true
  // },
  //   {
  //     _id:101,
  //     name:"sofa",
  //     img:`${window.location.origin}/assets/home/home-header.jpg`,
  //     price:"RS 4500",
  //     desc:"plz by this product for my company development",
  //     rating:3.5,
  //     wishlist:false,
  //     cart:true
  // }
  // ];
  return (
   <>
   {
    state.cart.length>0?(<div className="cart-container">
    <div className="cart-main-content">
    <CartList data={state.cart} />
    </div>
    <div className="cart-checkout-box">
    <CartCheckout/>
    </div>
    <div className="cart-checkout-box-mobile">
      
    <CartCheckoutMob/>
    </div>
   </div>):(
        <>
        <div className="cart-empty-img-container">
        <img src={`${window.location.origin}/assets/empty.png`} alt="" className='cart-empty-img'/>
        </div>
        </>
      )
   }
   
   
   </>
  )
}

export default Cart