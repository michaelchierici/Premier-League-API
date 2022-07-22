import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Coach } from "./Coach";

@Entity("refresh_token")
export class RefreshToken {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  expiresIn: number;

  @Column()
  @CreateDateColumn()
  createdAt?: Date;

  @OneToOne(() => Coach, (coach) => coach.refreshToken)
  @JoinColumn()
  user: Coach;

  @Column()
  @UpdateDateColumn()
  updatedAt?: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt?: Date;
}
