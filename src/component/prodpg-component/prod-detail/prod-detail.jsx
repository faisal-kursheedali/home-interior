import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, addToWishlist, removeFromCart, removeFromWishlist } from '../../../app/actions/product'
import { setAuthMsg } from '../../../app/feature/auth'
import Rating from '../../rating/rating'
import "./prod-detail.css"

const ProdDetail = ({data}) => {
  const state=useSelector(store=>store.products);
  const authState=useSelector(store=>store.auth);
  const dispatch=useDispatch();
  // const [cart, setCart] = useState(state.cart.find(i => i._id === data._id?true:false));
  //   const [wishlist, setWishlist] = useState(state.wishlist.find(i => i._id === data._id?true:false));
  // state.cart.forEach(i=>{
  //   if (i._id===data._id) {
  //     cartExist=true;
  //   }
  // })
  // state.wishlist.forEach(i=>{
  //   if (i._id===data._id) {
  //     wishlistExist=true;
  //   }
  // })
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
          {
            state.cart.find(i => i._id === data._id?true:false)?<button className="prod-detail-btn-cart prod-detail-sec-btn"
            onClick={()=>{
              if (authState.token) {
                dispatch(removeFromCart(data._id))
              }
            }}
            >Remove from Cart</button>:<button className="prod-detail-btn-cart"
            onClick={()=>{
              if (authState.token) {
                dispatch(addToCart(data))
              }else{
                dispatch(setAuthMsg({content:"need to login",type:"error"}))
              }
            }}
            >Cart</button>
          }
          {
             state.wishlist.find(i => i._id === data._id?true:false)?<button className="prod-detail-btn-wishlist prod-detail-sec-btn" 
            onClick={()=>{
              if (authState.token) {
                dispatch(removeFromWishlist(data._id))
              }
            }}
            >Remove from Wishlist</button>:<button className="prod-detail-btn-wishlist"
            onClick={()=>{
              if (authState.token) {
                dispatch(addToWishlist(data))
              }else{
                dispatch(setAuthMsg({content:"need to login",type:"error"}))
              }
            }}
            >Wishlist</button>
          }
          
        </div>
      </div>
    </div>
    </>
  )
}

export default ProdDetail