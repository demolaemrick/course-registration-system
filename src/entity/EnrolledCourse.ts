import {Entity, Column, ManyToOne, BeforeInsert} from "typeorm";
import Course from "./Course"
import User from "./User";

@Entity("enrolled_courses")
export  default class EnrolledCourse extends Course {
    @ManyToOne(() => User, user => user.matricNo)
    student: User;

    @Column()
    level_adviser_approved: boolean;

    @BeforeInsert()
    updateLevelAdviseApproved() {
        this.level_adviser_approved = false;
    }
    
    @Column()
    hod_approved: boolean;

    @BeforeInsert()
    updateHodApproved() {
        this.hod_approved = false;
    }
}
