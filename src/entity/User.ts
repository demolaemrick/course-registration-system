import { Entity, Column } from "typeorm";
import Model from "./Model";

@Entity("users")
export default class User extends Model {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  level: number;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  college: string;

  @Column({ nullable: true })
  department: string;

  @Column({ nullable: true })
  programme: string;

  @Column({ nullable: true })
  profile_picture: string;

  @Column()
  matric_no: string;

  @Column()
  password: string;

  toJSON() {
    return { ...this, password: undefined, id: undefined };
  }
}
