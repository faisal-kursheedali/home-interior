import React from 'react'
import { useSelector } from 'react-redux'
// import { useLocation } from 'react-router-dom'
import ProdDetail from '../prod-detail/prod-detail'
import ProdReleated from '../prod-releated/prod-releated'
import "./prod-pg.css"

const ProdPgComp = ({data}) => {
  const state=useSelector(store=>store.products)
  
  const otherProd=state.allProducts.filter(i=>data._id!==i._id);
  return (
    <>
    <div className="prod-pg-container">
      <div className="prod-pg-content">
        <div className="prod-detail-container">
            <ProdDetail data={data}/>
        </div>
        <div className="prod-releated-container">
            <ProdReleated data={otherProd}/>
        </div>
        </div>
    </div>
    </>
  )
}

export default ProdPgComp