import { Injectable } from "@nestjs/common";
import { InjectModel, InjectConnection } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";
import { CreateCatDto } from "src/dto/create-cat.dto";
import { Cat } from "src/schemas/cat.schema";


@Injectable()
export class DobuleService {
  constructor(@InjectConnection('users') private connection: Connection) { }

  // async create(createCatDto: CreateCatDto): Promise<Cat> {
  //   const createdCat = new this.catModel(createCatDto);
  //   return createdCat.save();
  // }

  async findAll() {
    // return this.catModel.find().exec();
    console.log(this.connection)
  }
}