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
        return error.message ;
    }
})
export const emailRecover=createAsyncThunk("auth/emailRecover",async(loginValue,thunk_api)=>{
    const {auth}=thunk_api.getState();
    try {
        const res=await axios.post("/api/auth/recover",{
            email:auth.email,
            recNo:auth.recNo 
        });
        console.log(res);
        return res.data
        
    } catch (error) {
          console.log(error);
        return error.message;
      }
})
export const SignupUser=createAsyncThunk("auth/signupUser",async(_,thunk_api)=>{
    const {auth}=thunk_api.getState();
    const req={
        email:auth.email,
        password:auth.password,
        name:auth.name,
        recNo:auth.recNo
    }
    try {
        const res=await axios.post("api/auth/signup",req);
        return res.data;
    } catch (error) {
        return error.message ;
    }
})