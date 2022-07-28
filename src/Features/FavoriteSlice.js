import { createSlice } from "@reduxjs/toolkit";

const initialState = {
favorite :[]
}

export const FavoriteSlice = createSlice({
    name : 'favorite',
    initialState,
    reducers:{
        addFavorite :((state,{payload})=>{
            console.log(payload)
            state.favorite = [...state.favorite,payload]

        }),
        removeFavorite : ((state,{payload})=>{
            console.log(payload)
          state.favorite.filter(fav=> fav.id!==payload)
        })
    }
})
export const{addFavorite,removeFavorite} = FavoriteSlice.actions
export default FavoriteSlice.reducer
