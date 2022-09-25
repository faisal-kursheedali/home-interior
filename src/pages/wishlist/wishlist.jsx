import React from 'react'
import { ProdList } from '../../component'
import "./wishlist.css";
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWishlist } from '../../app/actions/product';

const Wishlist = () => {
  const state=useSelector(store => store.products);
  const dispatch=useDispatch();
  useEffect(()=>{

    dispatch(getWishlist());
  },[]);

  useEffect(()=>{
    console.log(state.wishlist);
  },[state.wishlist])
  const data2=[
    {
        name:"sofa",
        img:`${window.location.origin}/assets/home/home-header.jpg`,
        price:"RS 4500",
        rating:3.5,
        wishlist:true,
        cart:true
    },
    {
        name:"sofa",
        img:`${window.location.origin}/assets/home/home-header.jpg`,
        price:"RS 4500",
        rating:3.5,
        wishlist:true,
        cart:true
    },
    {
        name:"sofa",
        img:`${window.location.origin}/assets/home/home-header.jpg`,
        price:"RS 4500",
        rating:3.5,
        wishlist:true,
        cart:true
    },
]
  return (
    <>
    {
      
      <ProdList data={state.wishlist}/>
    
}
    </>
  )
}

export default Wishlist