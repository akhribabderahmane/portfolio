import { createSlice } from "@reduxjs/toolkit"

const initialState={
    lastWeekStats:null,
    allTimeStats:null,
}



export const wakatimeSlice=createSlice({
    name:"wakatime",
    initialState,
    reducers:{
        setLastWeekStats:(state,action)=>{
            state.lastWeekStats=action.payload
        },
        setAllTimeStats:(state,action)=>{
            state.allTimeStats=action.payload
        }
    }
})


export const {setAllTimeStats,setLastWeekStats}=wakatimeSlice.actions;
export default wakatimeSlice.reducer;