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
    return newData
}

export default FilterFnc;