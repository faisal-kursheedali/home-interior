import React,{useState} from 'react'
import { AiFillStar } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { clearFilter, setCatagory, setPrice, setRating, setSearch , setSort} from '../../../app/feature/filter'
import { setProdMsg } from '../../../app/feature/product'
import "./prod-filter.css"

const ProdFilter = ({hideCatagory}) => {
  const dispatch=useDispatch();
  const [input, setInput] = useState("");
  return (
    <>

      <div className="prod-list-filter-container">
        <div className="prod-list-filter">
          <div className="prod-filter-head-txt">
            Filter
          </div>
          <div className="prod-filter">

            <div className="prod-filter-price prod-filter-type">


              <div className="prod-filter-price-head prod-filter-sub-head">price</div>
              <div className="filter-type-content">
              <ul className="prod-filter-price-list prod-filter-list">
                <li className="prod-filter-price-item">
                  <input type="radio" name='filter-price' value={10000} className="prod-filter-price-input" onChange={(e)=>{
                    dispatch(setPrice(e.target.value))
                  }} />
                  <span className="prod-filter-price-amount">
                    10,000
                  </span>
                </li>
                <li className="prod-filter-price-item">
                  <input type="radio" name='filter-price' value={7000} className="prod-filter-price-input" onChange={(e)=>{
                    dispatch(setPrice(e.target.value))
                  }} />
                  <span className="prod-filter-price-amount">
                    7000
                  </span>
                </li>
                <li className="prod-filter-price-item">
                  <input type="radio" name='filter-price' value={5000} className="prod-filter-price-input" onChange={(e)=>{
                    dispatch(setPrice(e.target.value))
                  }} />
                  <span className="prod-filter-price-amount">
                    5000
                  </span>
                </li>
                <li className="prod-filter-price-item">
                  <input type="radio" name='filter-price' value={2000} className="prod-filter-price-input" onChange={(e)=>{
                    dispatch(setPrice(e.target.value))
                  }} />
                  <span className="prod-filter-price-amount">
                    2000
                  </span>
                </li>
                <li className="prod-filter-price-item">
                  <input type="radio" name='filter-price' value={500} className="prod-filter-price-input" onChange={(e)=>{
                    dispatch(setPrice(e.target.value))
                  }} />
                  <span className="prod-filter-price-amount">
                    500
                  </span>
                </li>
              </ul>
            </div>
            </div>
            <div className="prod-filter-catagory-head prod-filter-sub-head">sort</div>
            <div className="filter-type-content">
                {
                  !hideCatagory?<select name="filter-catagory" className='prod-filter-catagory-select' id="" onChange={(e)=>{
                    dispatch(setSort(e.target.value))
                  }}>
                    <option value="" className='prod-filter-catagory-option'>select the option</option>
                    <option value="lowtoheigh" className='prod-filter-catagory-option'>Low to high</option>
                    <option value="heighttolow" className='prod-filter-catagory-option'>High to low</option>
                  </select>:""
                }
              
            </div>
            <div className="prod-filter-search prod-filter-type">


              <div className="prod-filter-search-head prod-filter-sub-head">search</div>
              <div className="filter-type-content">
              <input type="text" className="prod-filter-search-input" value={input} onChange={(e)=>setInput(prev=>prev=e.target.value)} />
              <button className="prod-filter-search-btn" onClick={()=>dispatch(setSearch(input))}>search</button>
            </div>
            </div>
            <div className="prod-filter-catagory prod-filter-type">


              <div className="prod-filter-catagory-head prod-filter-sub-head">catagory</div>
              <div className="filter-type-content">
                {
                  !hideCatagory?<select name="filter-catagory" className='prod-filter-catagory-select' id="" onChange={(e)=>{
                    dispatch(setCatagory(e.target.value))
                  }}>
                    <option value="" className='prod-filter-catagory-option'>select the option</option>
                    <option value="bed" className='prod-filter-catagory-option'>bed</option>
                    <option value="sofa" className='prod-filter-catagory-option'>sofa</option>
                    <option value="interior" className='prod-filter-catagory-option'>interior</option>
                    <option value="table" className='prod-filter-catagory-option'>table</option>
                  </select>:""
                }
              
            </div>
            </div>
            <div className="prod-filter-rating prod-filter-type">


              <div className="prod-filter-rating-head prod-filter-sub-head">rating</div>
              <div className="filter-type-content">
              <ul className="prod-filter-rating-list prod-filter-list">
                <li className="prod-filter-rating-item">
                  <input type="radio" name='filter-rating' className="prod-filter-rating-input" value={5} onChange={(e)=>dispatch(setRating(e.target.value))} />
                  <span className="prod-filter-rating-amount">
                    5
                    <AiFillStar color="gold" />
                  </span>
                </li>
                <li className="prod-filter-rating-item">
                  <input type="radio" name='filter-rating' className="prod-filter-rating-input" value={4} onChange={(e)=>dispatch(setRating(e.target.value))} />
                  <span className="prod-filter-rating-amount">
                    4
                    <AiFillStar color="gold" />
                  </span>
                </li>
                <li className="prod-filter-rating-item">
                  <input type="radio" name='filter-rating' className="prod-filter-rating-input" value={3} onChange={(e)=>dispatch(setRating(e.target.value))} />
                  <span className="prod-filter-rating-amount">
                    3
                    <AiFillStar color="gold" />
                  </span>
                </li>
                <li className="prod-filter-rating-item">
                  <input type="radio" name='filter-rating' className="prod-filter-rating-input" value={2} onChange={(e)=>dispatch(setRating(e.target.value))} />
                  <span className="prod-filter-rating-amount">
                    2
                    <AiFillStar color="gold" />
                  </span>
                </li>
                <li className="prod-filter-rating-item">
                  <input type="radio" name='filter-rating' className="prod-filter-rating-input" value={1} onChange={(e)=>dispatch(setRating(e.target.value))} />
                  <span className="prod-filter-rating-amount">
                    1
                    <AiFillStar color="gold" />
                  </span>
                </li>
              </ul>
              </div>
            </div>

          </div>
        </div>
        <button className="prod-filter-clear-all" onClick={()=>{
          dispatch(clearFilter())
          dispatch(setProdMsg({content:"filter is cleared",type:"normal" }))
        }}>Clear all</button>
      </div>
    </>
  )
}

export default ProdFilter