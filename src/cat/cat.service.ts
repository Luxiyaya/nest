import { Injectable } from "@nestjs/common";
import { InjectModel, InjectConnection } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";
import { CreateCatDto } from "src/dto/create-cat.dto";
import { Cat } from "src/schemas/cat.schema";


@Injectable()
export class CatService {
  constructor(
    @InjectModel(Cat.name) private catModel: Model<Cat>,
    // 使用InjectConnection注入connection保持原生API调用
    @InjectConnection() private connection: Connection
  ) { }

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}