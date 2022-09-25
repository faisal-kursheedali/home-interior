import React, { useState } from 'react'
import "./prod-list.css"

import ProdListCard from '../prod-list-card/prod-list-card'
import { useNavigate } from 'react-router-dom'

const ProdList = ({ data }) => {
  const navigate=useNavigate();
  // const [hover, setHover] = useState(new Array(data.length).fill(false));
  // console.log(hover);
  return (
    <>
      <div className="prod-list-container">

        <div className="prod-list-content">
          <ul className="prod-list">
            {
              data.map((i,index) => {

                return (
                  <>
                    <li className="prod-list-item" key={i._id}
                    // onClick={()=>navigate(`/product${i._id}`,{state:{detail:i,releated:data.filter(j=>j!==i)}})}
                    >
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