import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import { Cart, Home, Login, ProductPg, Shop, Signup, User, Wishlist } from '../pages'
import PrivateAuth from './privateAuth';
import RequireAuth from './requireAuth';

const PageRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/shop' exact element={<Shop/>}/>
        <Route path='/user' exact element={(
          <RequireAuth><User/></RequireAuth>
          
        )}/>
        <Route path='/cart' exact element={(
          <RequireAuth><Cart/></RequireAuth>
        )}/>
        <Route path='/wishlist' exact element={(
          <RequireAuth><Wishlist/></RequireAuth>
        )}/>
        <Route path='/product:id' exact element={<ProductPg/>}/>
        <Route path='/login' exact element={(
          <Login/>
        )}/>
        <Route path='/signup' exact element={(
          <Signup/>
        )}/>
    </Routes>
    </>
  )
}

export default PageRoute