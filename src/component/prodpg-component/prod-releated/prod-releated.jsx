import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProdRelCard from '../prod-releated-card/prod-rel-card'
import "./prod-releated.css"
import {AiOutlineArrowDown} from "react-icons/ai"

const ProdReleated = ({data}) => {
  const navigate=useNavigate();
  const arr=data.slice(0,4)

  return (
    <>
    <div className="prod-releated-component">
      <div className="prod-releated-component-head">Releated Products</div>
      <ul className="prod-releated-list">
        {
          arr.map(i=>{
            return(
              <li className="prod-releated-list-item" key={i._id}>
                <ProdRelCard data={i}/>
              </li>
            )
          })
        }
      </ul>
      <button className="prod-releated-more-btn" onClick={()=>navigate("/shop")}>More   <AiOutlineArrowDown/></button>
    </div>
    </>
  )
}

export default ProdReleated