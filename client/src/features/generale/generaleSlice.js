import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedMenuItem:"Home",
    githubData:[],
    githubStats:{
        totalContributions:0,
        countThisWeek:0,
        bestDayCount:0,
        averageCount:0,
    }
  }


export const generaleSlice=createSlice({
    name:"general",
    initialState,
    reducers:{
        setSelectedMenuItem:(state,action)=>{
            state.selectedMenuItem=action.payload;
        },
        setGithubData:(state,action)=>{
            state.githubData=action.payload;
        },
        setGithubStats:(state,action)=>{
             state.githubStats=action.payload;
        }
    }
});
 export const {setSelectedMenuItem,setGithubData,setGithubStats}=generaleSlice.actions;
 export default generaleSlice.reducer;