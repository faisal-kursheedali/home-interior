import {
    createSlice
} from "@reduxjs/toolkit";
import {
    loginUser
} from "../actions/auth";
const initialState = {
    status: false,
    token: localStorage.getItem("userToken") ?? "",
    userInfo: localStorage.getItem("userInfo") ?? "",
    error: "",
    loading: false,
    email: "",
    password: "",
    name: {
        fname: "",
        lname: ""
    },
    remberMe: false,

}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loadAuth: (state) => {
            const userInfo = JSON.parse(localStorage.getItem("userInfo"));
            const userToken = localStorage.getItem("userToken");
            if (userInfo && userToken) {
                state.email = userInfo.email;
                state.password = userInfo.password;
                state.name = userInfo.name;
                state.token = userToken;
                state.status = true;
            }
        },
        guestLogin: (state) => {
            state.email = "adarshbalika@gmail.com";
            state.password = "adarshbalika"
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setRemberMe: (state, action) => {
            state.remberMe = action.payload;
        },
        logoutUser: (state) => {
            state.status=false;
            state.token="";
            state.name={
                lname:"",
                fname:""
            };
            state.email="";
            state.password="";
            localStorage.removeItem("userToken");
            localStorage.removeItem("userInfo");
            
        }
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.loading = true;
            state.error = "";

        },
        [loginUser.rejected]: (state, action) => {

        },
        [loginUser.fulfilled]: (state, action) => {
            state.token = action.payload.encodedToken;
            state.userInfo = action.payload.foundUser;
            state.loading = false;
            state.error = "";
            state.status = true;
            state.name = {
                fname: action.payload.foundUser.firstName,
                lname: action.payload.foundUser.lastName,
            };
            if (state.remberMe) {
                localStorage.setItem("userToken", action.payload.encodedToken);
                localStorage.setItem("userInfo", JSON.stringify({
                    name: state.name,
                    email: state.email,
                    password: state.password
                }));
            };
            
        }
    }

})

const {
    guestLogin,
    setEmail,
    setName,
    setPassword,
    setRemberMe,
    loadAuth,
    logoutUser
} = authSlice.actions;
export {
    guestLogin,
    setEmail,
    setName,
    setPassword,
    setRemberMe,
    loadAuth,
    logoutUser
};
export default authSlice.reducer;