import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLogin :false,
    users : {}
}
const googleLoginSlice = createSlice({
    name : "login",
initialState,
reducers :{
     login: (state,action) => {
    state.users = action.payload
    state.isLogin = true
     },
     logOut: (state,action) => {
        state.users = action.payload
        state.isLogin = false
     }
}
})

export const {login,logOut} = googleLoginSlice.actions
export default googleLoginSlice.reducer