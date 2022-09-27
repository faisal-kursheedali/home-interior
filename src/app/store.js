import { configureStore } from "@reduxjs/toolkit";
import auth from "./feature/auth";
import filter from "./feature/filter";
import products from "./feature/product";

const store=configureStore({
    reducer:{
        products:products,
        auth: auth,
        filter:filter
    }
})


export default store;