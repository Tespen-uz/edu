import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    statistics: [],
    courses: [],
    teachers: [],
  },
  reducers: {
    setStatistics: (state, action) => {
      state.statistics = action.payload;
    },
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    setTeachers: (state, action) => {
      state.teachers = action.payload;
    },
  },
});

export const { setStatistics, setCourses, setTeachers } = dataSlice.actions;

export default dataSlice.reducer;
