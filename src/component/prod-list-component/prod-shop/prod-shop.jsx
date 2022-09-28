import React,{useState} from 'react'
import ProdFilter from '../product-filter/prod-filter'
import ProdList from '../product-list/prod-list'
import "./prod-shop.css"
import { FcFilledFilter } from "react-icons/fc"

const ProdShop = ({ data,hideCat}) => {
  const [filter, setFilter] = useState(false);
  const hideCatagory=hideCat?true:false;
  return (
    <>
      <div className="shop-container">
        <div className="shop-filter-btn" onClick={() => setFilter(prev => prev = !prev)}>
          <FcFilledFilter />
        </div>
        <div className="shop-content">
          {
            window.innerWidth>900?((<div className="shop-filter-container">
            <ProdFilter  hideCatagory={hideCatagory}  />
          </div>)): filter ? (<div className="shop-filter-container">
              <ProdFilter  hideCatagory={hideCatagory}  />
            </div>) : ""
          }
          

          <div className="shop-prod-container" onClick={() => setFilter(prev => prev = false)}>
            <ProdList data={data} />
          </div>
        </div>

      </div>
    </>
  )
}

export default ProdShop