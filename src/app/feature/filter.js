import { createSlice } from "@reduxjs/toolkit";
const initialState={
    rating:"",
    search:"",
    catagory:"",
    price:"",
    sort:"",
}

const FilterSlice=createSlice({
    name:"filter",
    initialState,
    reducers:{
        clearFilter:(state)=>{
            
                state.rating="";
                state.search="";
                state.catagory="";
                state.price="";
        },
        setSearch:(state,action)=>{
            state.search=action.payload;
        },
        setRating:(state,action)=>{
            state.rating=action.payload
        },
        setCatagory:(state,action)=>{
            state.catagory=action.payload;
        },
        setPrice:(state,action)=>{
            state.price=action.payload;
        },
        setSort:(state,action)=>{
            state.sort=action.payload;
        }
    }
})

export const {setCatagory,setRating,setSearch,clearFilter,setPrice,setSort}=FilterSlice.actions;
export default FilterSlice.reducer;