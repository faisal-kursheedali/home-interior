import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { ProdShop } from '../../component'

const Catagory = () => {
    const state=useSelector(store=>store.products);
    const location=useLocation();
    const catagoryName=location.state
    const catagoryData=state.allProducts.filter(i=>i.catagory===catagoryName&&i);
  return (
    <>
    <ProdShop data={catagoryData} hideCat={true}/>
    </>
  )
}

export default Catagory