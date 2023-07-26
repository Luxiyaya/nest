import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from 'src/schemas/cat.schema';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatController],
  providers: [CatService],

})
export class CatModule { }
