import { courseActions } from "./course-slice";
import { AppDispatch } from "../index";
import * as apis from "../../api";

import { Course } from "../../types/course";

export const fetchCourses = () => async (dispatch: AppDispatch) => {
  dispatch(courseActions.fetchCourseStart());
  try {
    const { data: courses } = await apis.fetchCourses();
    dispatch(courseActions.fetchCourses({ courses: courses as Course[] }));
  } catch (err) {
    console.log(err);
  }
};
