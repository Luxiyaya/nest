import { Module } from '@nestjs/common';
import { DogService } from './dog.service';
import { DogController } from './dog.controller';
import { AppService } from './../app.service';

@Module({
  controllers: [DogController],
  providers: [DogService, AppService],
})
export class DogModule { }
