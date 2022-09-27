import React from 'react'
import { ProdList } from '../../component'
import "./wishlist.css";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWishlist } from '../../app/actions/product';

const Wishlist = () => {
  const state=useSelector(store => store.products);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getWishlist());
  },[dispatch]);
  return (
    <>{
      state.wishlist.length>0?(
        <div className="wishlist-container">
        <ProdList data={state.wishlist}/>
        </div>
      ):(
        <>
        <div className="wishlist-empty-img-container">
        <img src={`${window.location.origin}/assets/empty.png`} alt="" className='wishlist-empty-img'/>
        </div>
        </>
      )
    }
    </>
  )
}

export default Wishlist