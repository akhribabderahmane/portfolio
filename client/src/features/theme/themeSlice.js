import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:false,
  }


  export const themeSlice=createSlice({
    name:"theme",
    initialState,
    reducers:{
        toggleTheme: (state) => {
            state.value = !state.value;
            const newMode = state.value ? 'dark' : 'light';
            document.documentElement.classList.toggle('dark', state.value);
            localStorage.setItem('theme', newMode);
          },
          setTheme: (state, action) => {
            state.value = action.payload === 'dark';
            document.documentElement.classList.toggle('dark', state.value);
          },
    }
  })

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
  