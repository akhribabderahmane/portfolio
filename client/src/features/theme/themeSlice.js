import { createSlice } from "@reduxjs/toolkit";

const storedTheme = localStorage.getItem("theme") || "light";
const initialState = {
  value: storedTheme === "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = !state.value;
      const newMode = state.value ? "dark" : "light";
      document.documentElement.classList.toggle("dark", state.value);
      localStorage.setItem("theme", newMode);
    },
    setTheme: (state, action) => {
      state.value = action.payload === "dark";
      document.documentElement.classList.toggle("dark", state.value);
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
