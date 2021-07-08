import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { coursesType } from "../types/course";

const initialState: coursesType = {
  courses: [],
};

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    replaceCourses: (state, action: PayloadAction<coursesType>) => {
      state.courses = action.payload.courses;
    },
  },
});

export const courseActions = courseSlice.actions;

export default courseSlice.reducer;
