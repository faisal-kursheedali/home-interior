import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart, addToWishlist, removeFromCart, removeFromWishlist } from '../../../app/actions/product'
import { setAuthMsg } from '../../../app/feature/auth'
import Rating from '../../rating/rating'
import "./prod-rel-card.css"

const ProdRelCard = ({data}) => {
  const state=useSelector(store=>store.products);
  const authState=useSelector(store=>store.auth);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  return (
    <div className="prod-rel-card-component">
        <img src={data.img} alt="" className="prod-rel-card-img" />
        <div className="prod-rel-card-content">
          <div className="prod-rel-card-click" onClick={()=>navigate(`/product${data._id}`,{state:data})} >
            <div className="prod-rel-card-name">{data.name}</div>
            <div className="prod-rel-card-price">{data.price}</div>
            <div className="prod-rel-card-rating">
                <Rating rating={data.rating}/>
            </div>
            </div>
            <div className="prod-rel-card-input">
              {
                state.cart.find(i=>i._id===data._id?true:false)?<div className="prod-rel-card-cart prod-rel-card-cart-remove"
                onClick={()=>{
                  if (authState.token) {
                    dispatch(removeFromCart(data._id))
                  }
                }}
                >remove from cart</div>:<div className="prod-rel-card-cart"
                onClick={()=>{
                  if (authState.token) {
                    dispatch(addToCart(data))
                  }else{
                    dispatch(setAuthMsg({content:"need to login",type:"error"}))
                  }
                }}
                >add to cart</div>
              }
              
              {
                state.wishlist.find(i=>i._id===data._id?true:false)?<div className="prod-rel-card-wishlist prod-rel-card-wishlist-remove"
                onClick={()=>{
                  if (authState.token) {
                    dispatch(removeFromWishlist(data._id))
                  }
                }}
                >remove from wishlist </div>:<div className="prod-rel-card-wishlist"
                onClick={()=>{
                  if (authState.token) {
                    dispatch(addToWishlist(data))
                  }else{
                    dispatch(setAuthMsg({content:"need to login",type:"error"}))
                  }
                }}
                >add to wishlist </div>
              }
              
              
            </div>
        </div>
    </div>
  )
}

export default ProdRelCard