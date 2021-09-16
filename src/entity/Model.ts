import {
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  Generated,
} from "typeorm";

export default abstract class Model extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated("uuid")
  @Column()
  uuid: string;

  @Column({ nullable: true })
  level: number;
  
  @Column({ nullable: true })
  college: string;

  @Column({ nullable: true })
  department: string;

  @Column({ nullable: true })
  session: string;

  @Column({ nullable: true })
  semester: string;


  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  //allows me to initialize the object
  constructor(model?: Partial<any>) {
    super();
    Object.assign(this, model);
  }

  //TODO: to remove the id from response
  toJSON() {
    return { ...this, id: undefined };
  }
}
