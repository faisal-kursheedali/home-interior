import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../cart-card/cart-card'
import "./cart-list.css"

const CartList = () => {
  const data=useSelector(store=>store.products.cart)
  let finalArr=[];
  let exist=false;

  data.forEach(i => {
    // let count=0;
    // data.forEach(j=>{
    //     if(i._id===j._id){
    //       count=count+1;
    //     }
    // });
    finalArr.forEach(k=>{
        if (k._id===i._id) {
          exist=true
        }else{
          exist=false;
        }
    })
    if (!exist) {
      
      finalArr=[...finalArr,i]
    }
  });
  return (
    <>
    <div className="cart-list-containe">
      <ul className="cart-list">
        {
          finalArr.map((i)=>{
            return(
              <>

              <li className="cart-list-item">
                <CartCard data={i} 
                // count={i.count}
                />
              </li> 
              
              </>
            ) 
          })
        }
      </ul>
    </div>
    
    </>
  )
}

export default CartList