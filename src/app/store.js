import { configureStore } from "@reduxjs/toolkit";
import auth from "./feature/auth";
import products from "./feature/product";

const store=configureStore({
    reducer:{
        products:products,
        auth: auth,
    }
})


export default store;