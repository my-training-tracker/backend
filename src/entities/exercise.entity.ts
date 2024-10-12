import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  duration: number;

  @Column()
  date: Date;

  @ManyToOne(() => User, (user) => user.exercises)
  user: User;
}
