import React from 'react'
import { useLocation } from 'react-router-dom'
import { ProdPgComp } from '../../component';


const ProductPg = () => {
    const location=useLocation();
    const data=location.state.detail;
    const releated=location.state.releated;
  return (
      <>
    <ProdPgComp detail={data} releated={releated}/>
      </>
    )
}

export default ProductPg