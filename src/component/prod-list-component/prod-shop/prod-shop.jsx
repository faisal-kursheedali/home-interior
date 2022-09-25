import React from 'react'
import ProdFilter from '../product-filter/prod-filter'
import ProdList from '../product-list/prod-list'
import "./prod-shop.css"

const ProdShop = ({data}) => {
  return (
    <>
    <div className="shop-container">
        <div className="shop-filter-container">
            <ProdFilter/>
        </div>
        <div className="shop-prod-container">
            <ProdList data={data}/>
        </div>
    </div>
    </>
  )
}

export default ProdShop