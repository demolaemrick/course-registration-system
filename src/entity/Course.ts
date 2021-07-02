import {Entity, Column} from "typeorm";
import Model from "./Model"


@Entity("courses")
export  default class Course extends Model {
    @Column()
    course_code: string;

    @Column()
    course_title: string;

    @Column()
    course_unit: string;
}
