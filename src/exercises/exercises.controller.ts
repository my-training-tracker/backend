import { Controller, Get, Post, Body } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { Exercise } from '../entities/exercise.entity';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Post()
  create(@Body() exercise: Partial<Exercise>) {
    return this.exercisesService.create(exercise);
  }

  @Get()
  findAll() {
    return this.exercisesService.findAll();
  }

  // 다른 엔드포인트 구현...
}
