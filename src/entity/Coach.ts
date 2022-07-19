import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { coachRouter } from "../routes/coachRouter";
import { Club } from "./Club";
import * as bcrypt from "bcrypt";

@Entity("Coach")
export class Coach {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @OneToOne(() => Club, (club) => club.coach)
  @JoinColumn()
  club: Club[];

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
