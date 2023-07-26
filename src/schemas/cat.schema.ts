import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { HydratedDocument } from "mongoose";


@Schema()
export class Cat {
  @Prop()
  name: string

  @Prop()
  age: number

  @Prop()
  bread: string
}

export type CatDocument = HydratedDocument<Cat>

export const CatSchema = SchemaFactory.createForClass(Cat)



/** 第二种定义 */

// export const CatSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   bread: String,
// })