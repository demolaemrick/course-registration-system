import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CourseState } from "../../types/course";

const initialState: CourseState = {
  courses: [],
  isLoading: false,
};

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    fetchCourseStart: (state) => {
      state.isLoading = true;
    },
    fetchCourses: (state, action: PayloadAction<CourseState>) => {
      state.courses = action.payload.courses;
      state.isLoading = false;
    },
  },
});

export const courseActions = courseSlice.actions;

export default courseSlice.reducer;
