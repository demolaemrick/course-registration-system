import { courseActions } from "./course-slice";
import { AppDispatch } from "./index";
import * as apis from "../api";

export const fetchCourses = () => async (dispatch: AppDispatch) => {  
  try {
    const { data: courses } = await apis.fetchCourses();
    dispatch(courseActions.replaceCourses({ courses: courses }));
  } catch (err) {
    console.log(err);
  }
};
