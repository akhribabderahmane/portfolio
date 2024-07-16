import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "./../features/theme/themeSlice"
import generaleReducer from "./../features/generale/generaleSlice"
import wakatimeReducer from '../features/wakatime/wakatimeSlice'
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    generale:generaleReducer,
    wakatime:wakatimeReducer
  },
})