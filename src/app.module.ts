import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ExercisesModule } from './exercises/exercises.module';
import { User } from './entities/user.entity';
import { Exercise } from './entities/exercise.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'exercise_tracker',
      entities: [User, Exercise],
      synchronize: true,
    }),
    UsersModule,
    ExercisesModule,
  ],
})
export class AppModule {}
