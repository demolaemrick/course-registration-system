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
  level: string;

  @Column({ nullable: true })
  phone: number;

  @Column()
  matric_no: string;

  @Column()
  password: string;

  toJSON() {
    return { ...this, password: undefined, id: undefined };
  }
}
