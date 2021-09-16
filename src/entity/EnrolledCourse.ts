import {Entity, Column, ManyToOne} from "typeorm";
import Course from "./Course"
import User from "./User";


@Entity("enrolled_courses")
export  default class EnrolledCourse extends Course {
    @ManyToOne(() => User, user => user.matricNo)
    student: User;

    @Column()
    level_adviser_approved: boolean;

    @Column()
    hod_approved: boolean;
}
