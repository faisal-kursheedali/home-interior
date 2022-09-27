import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("products/getAllProducts", async () => {

    try {
        const res = await axios.get("/api/products")
        return res.data;
    } catch (error) {
        return error.message
    }
});

export const getWishlist = createAsyncThunk("products/getWishlist", async (_, thunk_api) => {
    const {
        auth
    } = thunk_api.getState();
    const token = auth.token;
    try {
        const res = await axios.get(`/api/user/wishlist`, {
            headers: {
                authorization: token,
            },
        });
        return res.data;
    } catch (error) {
        return error.message;
    }
})
export const addToWishlist = createAsyncThunk("products/addToWishlist", async (product, thunk_api) => {
    const {
        auth
    } = thunk_api.getState();
    const token = auth.token;
    try {
        const res = await axios.post(`/api/user/wishlist`, {
            product
        }, {
            headers: {
                authorization: token,
            },
        });
        return res.data;
    } catch (error) {
        return error.message;
    }
})
export const removeFromWishlist = createAsyncThunk("products/removeFromWishlist", async (productId, thunk_api) => {
    const {
        auth
    } = thunk_api.getState();
    const token = auth.token;
    try {
        const res = await axios.delete(`/api/user/wishlist/${productId}`, {
            headers: {
                authorization: token,
            },
        });
        return res.data;
    } catch (error) {
        return error.message;
    }
})
export const getCart = createAsyncThunk("products/getCart", async (_, thunk_api) => {
    const {
        auth
    } = thunk_api.getState();
  
        const token = auth.token;
    try {
        const res = await axios.get(`/api/user/cart`, {
            headers: {
                authorization: token,
            },
        });
        return res.data;
    } catch (error) {
        return error.message;
    }
})
export const addToCart = createAsyncThunk("products/addToCart", async (product, thunk_api) => {
    const {
        auth
    } = thunk_api.getState();
    const token = auth.token;
    try {
        const res = await axios.post(`/api/user/cart`, {
            product
        }, {
            headers: {
                authorization: token,
            },
        });
        return res.data;
    } catch (error) {
        return error.message;
    }
})
export const removeFromCart = createAsyncThunk("products/removeFromCart", async (productId, thunk_api) => {
    const {
        auth
    } = thunk_api.getState();
    const token = auth.token;
    try {
        const res = await axios.delete(`/api/user/cart/${productId}`, {
            headers: {
                authorization: token,
            },
        });
        return res.data;
    } catch (error) {
        return error.message;
    }
})
// export const sample=createAsyncThunk("products/removeFromCart",async(productId,thunk_api)=>{
//     try {
//         console.log("working");
//     } catch (error) {
//         console.log("bad");
//     }
// })
export const getCatagories = createAsyncThunk("products/getCategories",
    async (_, thunkAPI) => {
        // console.log("hiii");
        try {
            const response = await axios.get(`/api/categories`);
            return response.data;
        } catch (error) {
            return error.message;
        }
    }
)


// export const getAllCatagory=createAsyncThunk("products/catagory",async()=>{
//     console.log("hii");
//     try {
//         const res=await axios.get("/api/categories");
//         console.log(res);
//         return res.data;
//     } catch (error) {
//         console.log(error);
//         return error.message;
//     }
// })