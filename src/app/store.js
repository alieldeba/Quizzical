import { configureStore } from "@reduxjs/toolkit";
import calculateReducer from "../slices/calculateSlice";
import apiReducer from "../slices/apiSlice";

export const store = configureStore({
  reducer: {
    api: apiReducer,
    calculate: calculateReducer,
  },
});
