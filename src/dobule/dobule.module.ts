import { Module } from '@nestjs/common';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { Cat, CatSchema } from 'src/schemas/cat.schema';
import { DobuleService } from './dobule.service';
import { DobuleController } from './dobule.controller';
import { Connection, } from 'mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }], 'users'),],
  controllers: [DobuleController],
  providers: [{
    provide: DobuleService,
    useFactory: (catsConnection: Connection) => {
      return new DobuleService(catsConnection);
    },
    inject: [getConnectionToken('users')],
  }],

})
export class DobuleModule { }
