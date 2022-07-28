import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../Features/Data/dataSlice"; 
import googleLoginReducer from '../Features/Login/loginSlice'
import FavoriteReducer from "../Features/FavoriteSlice";
export const store = configureStore({
    reducer:{
    data : dataReducer,
    user : googleLoginReducer,
   favorite : FavoriteReducer

    }
})