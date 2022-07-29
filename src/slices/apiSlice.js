import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setApi: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export default apiSlice.reducer;
export const { setApi } = apiSlice.actions;
