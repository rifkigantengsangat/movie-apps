import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
const initialState = {
    data : [],
    loading : false,
    error : false

}
export const dataSlice = createSlice ({
    name : 'data',
    initialState,
    reducers : {
        getData : state =>{
            state.loading = true;
        },
        getDataSuccess : (state,{payload}) =>{
            state.data = payload
            state.loading = false;
            state.error = false
        }, 
        getDataFailure : (state,action) =>{
            state.error = action.payload
            state.loading = false
        }
    }
})

export const {getData,getDataFailure,getDataSuccess} = dataSlice.actions
export default dataSlice.reducer