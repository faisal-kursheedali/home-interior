import { useSelector } from "react-redux";


const FilterFnc=(data)=>{
    const fState=useSelector(store=>store.filter);
    let newData=data;
    if (fState.catagory) {
       newData=newData.filter(i=>i.catagory===fState.catagory)
   }
   if (fState.search) {
     
      newData=newData.filter(i=>i.name.includes(fState.search)&&i);
  }
    if (fState.rating) {
        newData=newData.filter(i=>Math.floor(i.rating)<=fState.rating);
    }
     if (fState.price) {
        newData=newData.filter(i=>i.price<=fState.price)
    }
    if(fState.sort){
        newData=newData.slice().sort((a,b)=>fState.sort ==="lowtoheigh"?a.price-b.price:b.price-a.price)
    }
    return newData
}

export default FilterFnc;