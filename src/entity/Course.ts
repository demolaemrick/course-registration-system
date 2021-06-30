import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Course {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    course_code: string;

    @Column()
    course_title: string;

    @Column()
    course_unit: string;

}
