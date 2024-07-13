import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedMenuItem:"Home",
    githubData:[],
    githubStats:{
        totalContributions:0,
        countThisWeek:0,
        bestDayCount:0,
        averageCount:0,
    },
    wakaTimeStats:null,
    aboutElementSelected:"About me",
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
        },
        setWakaTimeStats:(state,action)=>{
            state.wakaTimeStats=action.payload;
        },
        setAboutElementSelected:(state,action)=>{
            state.aboutElementSelected=action.payload;
        }
    }
});
 export const {setSelectedMenuItem,setGithubData,setGithubStats,setWakaTimeStats,setAboutElementSelected}=generaleSlice.actions;
 export default generaleSlice.reducer;