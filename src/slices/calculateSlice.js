import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  calculate: false,
};

const calculateSlice = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    // here i increment the state by 0.5 because ui renders 2 times, so it will be 1
    addPoint: (state) => void (state.score += 0.5),
    toggleCalculate: (state) => void (state.calculate = !state.calculate),
  },
});

export default calculateSlice.reducer;
export const { addPoint, toggleCalculate } = calculateSlice.actions;
