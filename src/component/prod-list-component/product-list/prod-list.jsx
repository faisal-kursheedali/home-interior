import React from 'react'
import "./prod-list.css"

import ProdListCard from '../prod-list-card/prod-list-card'
// import { useNavigate } from 'react-router-dom'
import FilterFnc from '../product-filter/filter'

const ProdList = ({ data }) => {
  // const navigate=useNavigate();
  const newData = FilterFnc(data);
  
  return (
    <>
      <div className="prod-list-container">

        <div className="prod-list-content">
          <ul className="prod-list">
            {
              newData.map((i) => {
                
                // 
                
                return (
                  <>
                    <li className="prod-list-item" key={i._id} >
                      <ProdListCard data={i} />
                    </li>
                  </>
                )
              })
            }

          </ul>
        </div>
      </div>

    </>
  )
}

export default ProdList