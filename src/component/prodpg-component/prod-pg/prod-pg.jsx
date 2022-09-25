import React from 'react'
import { useLocation } from 'react-router-dom'
import ProdDetail from '../prod-detail/prod-detail'
import ProdReleated from '../prod-releated/prod-releated'
import "./prod-pg.css"

const ProdPgComp = ({detail,releated}) => {
  const info=detail;
  const otherProd=releated;
  const location=useLocation();
  if (info | otherProd) {
    info=location.state.detail;
    otherProd=location.state.releated;
  }
  return (
    <>
    <div className="prod-pg-container">
      <div className="prod-pg-content">
        <div className="prod-detail-container">
            <ProdDetail data={info}/>
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