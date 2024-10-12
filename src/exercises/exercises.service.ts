import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from '../entities/exercise.entity';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private exercisesRepository: Repository<Exercise>,
  ) {}

  async create(exercise: Partial<Exercise>): Promise<Exercise> {
    const newExercise = this.exercisesRepository.create(exercise);
    return this.exercisesRepository.save(newExercise);
  }

  async findAll(): Promise<Exercise[]> {
    return this.exercisesRepository.find({ relations: ['user'] });
  }

  // 다른 메서드 구현...
}
