import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Coach } from "./Coach";
import { League } from "./League";
import { Player } from "./Player";

@Entity("Club")
export class Club {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Coach, (coach) => coach.club)
  @JoinColumn()
  coach: Coach;

  @OneToMany(() => Player, (player) => player.club)
  @JoinColumn()
  players: Player[];

  @ManyToOne(() => League, (league) => league.club)
  @JoinColumn()
  league: League;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt: Date;
}
