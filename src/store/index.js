import { configureStore, createSlice } from "@reduxjs/toolkit";

const toggleslice = createSlice({
  name: "toggle",
  initialState: { toggle: false },
  reducers: {
    settoggle(state) {
      state.toggle = !state.toggle; 
    },
  },
});

const store = configureStore({
  reducer: {
    toggleslice: toggleslice.reducer, 
  },
});

export default store;
export const toggleaction = toggleslice.actions;
