import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const UserAuthSlice=createSlice({
    name:"UserAuth",
    initialState:{
        isAuthenticated:false,
        name:"",
        email:""

    },
    reducers:{
        loginUser : (state,action)=>{
            state.isAuthenticated=true     
            state.email=action.payload.email       
        },
        logoutUser :(state,action)=>{
            state.isAuthenticated=false
            state.name=""
            state.email=""
        },

         

    }
})

export const {loginUser,logoutUser}=UserAuthSlice.actions

export const UserAuthReducer=UserAuthSlice.reducer