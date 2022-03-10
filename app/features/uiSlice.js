import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLoading: false,
    firework: false,
    schoolPride: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    openFirework: (state, action) => {
      state.firework = true;
    },
    openSchoolPride: (state, action) => {
      state.schoolPride = true;
    },
  },
});

export const { setLoading, openFirework, openSchoolPride } = uiSlice.actions;

export default uiSlice.reducer;
