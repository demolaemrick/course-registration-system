export interface courseType {
  uuid: string;
  course_code: string;
  course_title: string;
  course_unit: string;
  createdAt: string;
  updatedAt: string;
}

export interface coursesType {
  courses: courseType[];
}
