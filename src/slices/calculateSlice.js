import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  calculate: false,
};

const calculateSlice = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    addPoint: (state) => void (state.score += 1),
    toggleCalculate: (state) => void (state.calculate = !state.calculate),
  },
});

export default calculateSlice.reducer;
export const { addPoint, toggleCalculate } = calculateSlice.actions;
