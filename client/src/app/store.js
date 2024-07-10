import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "./../features/theme/themeSlice"
import generaleReducer from "./../features/generale/generaleSlice"
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    generale:generaleReducer
  },
})