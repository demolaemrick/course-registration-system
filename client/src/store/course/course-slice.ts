import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Courses } from "../../types/course";

const initialState: Courses = {
  courses: [],
};

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    replaceCourses: (state, action: PayloadAction<Courses>) => {
      state.courses = action.payload.courses;
    },
  },
});

export const courseActions = courseSlice.actions;

export default courseSlice.reducer;
