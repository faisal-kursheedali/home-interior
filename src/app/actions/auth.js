import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser=createAsyncThunk("auth/loginUser",async(loginValue,thunk_api)=>{
    const {auth}=thunk_api.getState();
    const req={
        email:auth.email,
        password:auth.password 
    }
    try {
        const res=await axios.post("api/auth/login",req);
        return res.data;
    } catch (error) {
        return error ;
    }
})