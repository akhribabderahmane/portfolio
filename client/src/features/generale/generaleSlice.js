import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedMenuItem:localStorage.getItem("selectedMenuItem") || "Home",
    githubData:[],
    githubStats:{
        totalContributions:0,
        countThisWeek:0,
        bestDayCount:0,
        averageCount:0,
    },
    aboutElementSelected:"About me",
  }


export const generaleSlice=createSlice({
    name:"general",
    initialState,
    reducers:{
        setSelectedMenuItem: (state, action) => {
            state.selectedMenuItem = action.payload;
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
 export const {setSelectedMenuItem,setGithubData,setGithubStats,setAboutElementSelected}=generaleSlice.actions;
 export default generaleSlice.reducer;

 export const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    if (action.type === setSelectedMenuItem.type) {
      localStorage.setItem("selectedMenuItem", action.payload);
    }
    return result;
  };