import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "./../features/theme/themeSlice"
import generaleReducer,{localStorageMiddleware} from "./../features/generale/generaleSlice"
import wakatimeReducer from '../features/wakatime/wakatimeSlice'
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    generale:generaleReducer,
    wakatime:wakatimeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
  devTools:false,
})