import {
    createSlice
} from "@reduxjs/toolkit";
import {
    emailRecover,
    loginUser,
    SignupUser
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
    recNo: "",
    msg: {
        content: "",
        type: ""
    },
    showMsg:false,

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
                state.msg.content = "you are loged in";
                state.msg.type = "scucess";
            state.showMsg=true;
        }

        },
        guestLogin: (state) => {
            state.email = "adarshbalika@gmail.com";
            state.password = "adarshbalika";
            state.name = {
                fname: "Adarsh",
                lname: "Balika"
            };
            state.recNo = 1001
        },
        setFname: (state, action) => {
            state.name.fname = action.payload;
        },
        setLname: (state, action) => {
            state.name.lname = action.payload;
        },
        setRecno: (state, action) => {
            state.recNo = action.payload;
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
            state.status = false;
            state.token = "";
            state.name = {
                lname: "",
                fname: ""
            };
            state.email = "";
            state.password = "";
            localStorage.removeItem("userToken");
            localStorage.removeItem("userInfo");
            document.location.reload();

        },
        setAuthMsg:(state,action)=>{
            state.msg.content=action.payload.content;
            state.msg.type=action.payload.type;
        state.showMsg=true;
    },
    offAuthMsg:(state)=>{
        state.showMsg=false;
    }

    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.loading = true;
            state.error = "";

        },
        [loginUser.rejected]: (state, action) => {
            state.msg.content = action.payload;
            state.msg.type = "error";
            state.showMsg=true;

            state.loading = false;
            state.error = action.payload;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.msg.content = "login scucessfull";
            state.msg.type = "scucess";
            state.showMsg=true;

            state.token = action.payload.encodedToken;
            state.userInfo = action.payload.foundUser;
            state.loading = false;
            state.error = "";
            state.status = true;
            state.name = action.payload.foundUser.name;
            // state.name = {
            //     fname: action.payload.foundUser.name.fName,
            //     lname: action.payload.foundUser.name.lName,
            // };
            if (state.remberMe) {
                localStorage.setItem("userToken", action.payload.encodedToken);
                localStorage.setItem("userInfo", JSON.stringify({
                    name: state.name,
                    email: state.email,
                    // password: state.password
                }));
            };

        },
        [emailRecover.pending]: (state) => {
            state.loading = true;
            state.error = "";

        },
        [emailRecover.rejected]: (state, action) => {
            state.msg.content = action.payload;
            state.msg.type = "error";
            state.showMsg=true;

            state.loading = false;
            state.error = action.payload;
        },
        [emailRecover.fulfilled]: (state, action) => {
            state.msg.content = "email recoverd";
            state.msg.type = "scucess";
            state.showMsg=true;

            state.token = action.payload.encodedToken;
            state.userInfo = action.payload.foundUser;
            state.loading = false;
            state.error = "";
            state.status = true;
            state.name = action.payload.foundUser.name;
            // state.name = {
            //     fname: action.payload.foundUser.name.fName,
            //     lname: action.payload.foundUser.name.lName,
            // };
            if (state.remberMe) {
                localStorage.setItem("userToken", action.payload.encodedToken);
                localStorage.setItem("userInfo", JSON.stringify({
                    name: state.name,
                    email: state.email,
                    // password: state.password
                }));
            };

        },
        [SignupUser.pending]: (state) => {
            state.loading = true;
            state.error = "";

        },
        [SignupUser.rejected]: (state, action) => {
            state.msg.content = action.payload;
            state.msg.type = "error";
            state.showMsg=true;

            state.loading = false;
            state.error = action.payload;

        },
        [SignupUser.fulfilled]: (state, action) => {
            state.msg.content = "account created";
            state.msg.type = "scucess";
            state.showMsg=true;

            state.token = action.payload.encodedToken;
            state.userInfo = action.payload.createdUser;
            state.loading = false;
            state.error = "";
            state.status = true;
            state.name = action.payload.createdUser.name;
            // state.name = {
            //     fname: action.payload.createdUser.name.fName,
            //     lname: action.payload.createdUser.name.lName,
            // };
            if (state.remberMe) {
                localStorage.setItem("userToken", action.payload.encodedToken);
                localStorage.setItem("userInfo", JSON.stringify({
                    name: state.name,
                    email: state.email,
                    // password: state.password
                }));
            };

        }
    }

})

const {
    guestLogin,
    setEmail,
    setFname,
    setLname,
    setRecno,
    setPassword,
    setRemberMe,
    loadAuth,
    logoutUser,
    offAuthMsg,
    setAuthMsg
} = authSlice.actions;
export {
    guestLogin,
    setEmail,
    setFname,
    setLname,
    setRecno,
    setPassword,
    setRemberMe,
    loadAuth,
    logoutUser,
    setAuthMsg,
    offAuthMsg
};
export default authSlice.reducer;