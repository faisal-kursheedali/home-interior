import { createSlice } from "@reduxjs/toolkit";
import { addToCart, addToWishlist, getAllProducts, getCart, getWishlist, removeFromCart, removeFromWishlist } from "../actions/product";
const initialState={
    allProducts:[],
    categories: [],
    cart:[],
    wishlist:[],
    isLoading:false,
    error:false,
    errorMsg:"",
    alert:false,
    alertData:{
        type:"danger",
        value:"plzz login"
    },
    scucess:{
        msg:"",
        type:""
    }

}

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        
    },
    extraReducers:{
        [getAllProducts.pending]:(state)=>{
            state.isLoading=true;
            state.error=false
        },
        [getAllProducts.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=true;
            state.errorMsg=action.payload;
        },
        [getAllProducts.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.error=false;
            state.errorMsg="";
            state.allProducts=action.payload.products;
        },
        [getCart.pending]:(state,action)=>{
            state.isLoading=true;
            state.error=false;
        },
        [getCart.rejected]:(state,action)=>{
            state.isLoading=false;
           state.error=true;
           state.errorMsg=action.payload;
        },
        [getCart.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.error=false;
            state.errorMsg="";
            state.cart=action.payload.cart;
        },
        [getWishlist.pending]:(state,action)=>{
            state.isLoading=true;
            state.error=false;
        },
        [getWishlist.rejected]:(state,action)=>{
            state.isLoading=false;
           state.error=true;
           state.errorMsg=action.payload;
        },
        [getWishlist.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.error=false;
            state.errorMsg="";
            state.wishlist=action.payload.wishlist;
        },
        [addToWishlist.pending]:(state,action)=>{
            state.isLoading=true;
            state.error=false;
        },
        [addToWishlist.rejected]:(state,action)=>{
            state.isLoading=false;
           state.error=true;
           state.errorMsg=action.payload;
        },
        [addToWishlist.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.error=false;
            state.errorMsg="";
            state.scucess={
                msg:"added to the wishlist",
                type:"scucess"
            }
        },
        [removeFromWishlist.pending]:(state,action)=>{
            state.isLoading=true;
            state.error=false;
        },
        [removeFromWishlist.rejected]:(state,action)=>{
            state.isLoading=false;
           state.error=true;
           state.errorMsg=action.payload;
        },
        [removeFromWishlist.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.error=false;
            state.errorMsg="";
            state.scucess={
                msg:"removed from wishlist",
                type:"scucess"
            }
        },
        [addToCart.pending]:(state,action)=>{
            state.isLoading=true;
            state.error=false;
        },
        [addToCart.rejected]:(state,action)=>{
            state.isLoading=false;
           state.error=true;
           state.errorMsg=action.payload;
        },
        [addToCart.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.error=false;
            state.errorMsg="";
            state.scucess={
                msg:"added to the Cart",
                type:"scucess"
            }
        },
        [removeFromCart.pending]:(state,action)=>{
            state.isLoading=true;
            state.error=false;
        },
        [removeFromCart.rejected]:(state,action)=>{
            state.isLoading=false;
           state.error=true;
           state.errorMsg=action.payload;
        },
        [removeFromCart.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.error=false;
            state.errorMsg="";
            state.scucess={
                msg:"removed from Cart",
                type:"scucess"
            }
        },
    }
})


export default productSlice.reducer;