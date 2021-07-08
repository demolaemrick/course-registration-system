import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface courseInterface {
  uuid: string
  course_code: string;
  course_title: string;
  course_unit: string;
  createdAt: string,
  updatedAt: string
}

export interface courseState {
  courses: courseInterface[];
}
const initialState: courseState = {
  courses: [],
};

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    replaceCourses: (state, action: PayloadAction<courseState>) => {
      state.courses = action.payload.courses;
    },
  },
});

export const courseActions = courseSlice.actions

export default courseSlice.reducer
