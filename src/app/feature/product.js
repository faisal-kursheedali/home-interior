import { createSlice } from "@reduxjs/toolkit";
import { addToCart, addToWishlist, getAllProducts, getCart, getCatagories, getWishlist, removeFromCart, removeFromWishlist} from "../actions/product";
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
    msg:{
        content:"",
        type:""
    },showMsg:false,
    sideNav:false

}

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        setProdMsg:(state,action)=>{
            state.msg.content=action.payload.content;
            state.showMsg=true;
            state.msg.type=action.payload.type
        },
        offProdMsg:(state)=>{
            state.showMsg=false
        },
        setSideNav:(state,action)=>{
            state.sideNav=action.payload;
        }
    },
    extraReducers:{
        [getAllProducts.pending]:(state)=>{
            state.isLoading=true;
            state.error=false;

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
           state.msg.content=action.payload;
           state.showMsg=true;
           state.msg.type="error";
        },
        [getCart.fulfilled]:(state,action)=>{
            // state.msg.content="cart is fetched";
            // state.showMsg=true;// 
            // state.msg.type="scucess";
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
            state.msg.content=action.payload;
            state.showMsg=true;
            state.msg.type="error";
        },
        [getWishlist.fulfilled]:(state,action)=>{
            // state.msg.content="wishlist is feched";
            // state.showMsg=true;// 
            // state.msg.type="scucess";
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
           state.msg.content=action.payload;
           state.showMsg=true;
           state.msg.type="error";
        },
        [addToWishlist.fulfilled]:(state,action)=>{
            state.msg.content="added to wishlist";
            state.showMsg=true;
            state.msg.type="scucess";
            state.isLoading=false;
            state.error=false;
            state.errorMsg="";
            state.wishlist=action.payload.wishlist;
            // return state;
        },
        [removeFromWishlist.pending]:(state,action)=>{
            state.isLoading=true;
            state.error=false;
        },
        [removeFromWishlist.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=true;
            state.errorMsg=action.payload;
            state.msg.content=action.payload;
            state.showMsg=true;
            state.msg.type="error";
        },
        [removeFromWishlist.fulfilled]:(state,action)=>{
            state.msg.content="removed from wishlist";
            state.showMsg=true;
            state.msg.type="alert";
            state.wishlist=action.payload.wishlist;
            state.isLoading=false;
            state.error=false;
            state.errorMsg="";
            // return state;
        },
        [addToCart.pending]:(state,action)=>{
            state.isLoading=true;
            state.error=false;
        },
        [addToCart.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=true;
            state.errorMsg=action.payload;
            state.msg.content=action.payload;
            state.showMsg=true;
            state.msg.type="error";
        },
        [addToCart.fulfilled]:(state,action)=>{
            state.msg.content="added to cart";
            state.showMsg=true;
            state.msg.type="scucess";
            state.isLoading=false;
            state.error=false;
            state.errorMsg="";
            state.cart=action.payload.cart;
        },
        [removeFromCart.pending]:(state,action)=>{
            state.isLoading=true;
            state.error=false;
        },
        [removeFromCart.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=true;
            state.errorMsg=action.payload;
            state.msg.content=action.payload;
            state.showMsg=true;
            state.msg.type="error";
        },
        [removeFromCart.fulfilled]:(state,action)=>{
            state.msg.content="removed from cart";
            state.showMsg=true;
            state.msg.type="alert";
            state.isLoading=false;
            state.error=false;
            state.errorMsg="";
            state.cart=action.payload.cart;
        },
        [getCatagories.pending]:(state,action)=>{
            state.isLoading=true;
            state.error=false;
            state.errorMsg="";
        },
        [getCatagories.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=true;
            state.errorMsg=action.payload;
            state.msg.content=action.payload;
            state.showMsg=true;
            state.msg.type="error";
        },
        [getCatagories.pending]:(state,action)=>{
            state.isLoading=true;
            state.error=false;
            state.categories=action.payload.categories;
        },
        // [sample.pending]:(state,action)=>{
        //     state.isLoading=true;
        //     state.error=false;
        //     state.errorMsg="";
        // },
        // [sample.rejected]:(state,action)=>{
        //     state.isLoading=false;
        //     state.error=true;
        //     state.errorMsg="working";
        // },
        // [sample.pending]:(state,action)=>{
        //     state.isLoading=true;
        //     state.error=false;
        //     state.categories="working";
        // },
    }
})

export const {setProdMsg,offProdMsg,setSideNav}=productSlice.actions;
export default productSlice.reducer;