export interface Course {
  uuid: string;
  course_code: string;
  course_title: string;
  course_unit: number;
  createdAt: string;
  updatedAt: string;
}

export interface CourseState {
  courses: Course[];
  isLoading?: boolean;
}
