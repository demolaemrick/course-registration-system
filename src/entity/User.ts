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
  phone: string;  

  @Column({ nullable: true })
  programme: string;

  @Column({ nullable: true })
  profile_picture: string;

  @Column()
  matricNo: string;

  @Column()
  password: string;

  toJSON() {
    return { ...this, password: undefined, id: undefined };
  }
}
