import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
// import { SideNav } from '../component';
import { Cart, Catagory, ForgetPassword, Home, Login, ProductPg, ShareCart, Shop, Signup, User, Wishlist } from '../pages'
// import PrivateAuth from './privateAuth';
import RequireAuth from './requireAuth';

const PageRoute = () => {
  return (
    <>
    
    <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/shop' exact element={<Shop/>}/>
        <Route path="/sharedcart:data" exact element={<ShareCart/>}/>
        <Route path="/catagory:name" exact element={<Catagory/>}/>
        <Route path='/cart' exact element={(
          <RequireAuth><Cart/></RequireAuth>
        )}/>
        <Route path='/user' exact element={(
          <RequireAuth><User/></RequireAuth>
          
        )}/>
        <Route path='/wishlist' exact element={(
          <RequireAuth><Wishlist/></RequireAuth>
        )}/>
        <Route path='/product:id' exact element={<ProductPg/>}/>
        <Route path='/login' exact element={(
          <Login/>
        )}/>
        <Route path='/forgetpassword' exact element={(
          <ForgetPassword/>
        )}/>
        <Route path='/signup' exact element={(
          <Signup/>
        )}/>
    </Routes>
    </>
  )
}

export default PageRoute