import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Exercise } from './exercise.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Exercise, (exercise) => exercise.user)
  exercises: Exercise[];
}
