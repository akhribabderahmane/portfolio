import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedMenuItem:"Home",
  }


export const generaleSlice=createSlice({
    name:"general",
    initialState,
    reducers:{
        setSelectedMenuItem:(state,action)=>{
            state.selectedMenuItem=action.payload;
        }
    }
});
 export const {setSelectedMenuItem}=generaleSlice.actions;
 export default generaleSlice.reducer;