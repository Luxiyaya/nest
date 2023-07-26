import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from 'src/dto/create-cat.dto';


@Controller('cat')
export class CatController {
  constructor(private catService: CatService) { }

  @Get()
  findAll(): String {
    return "这个动作返回了一只猫！"
  }

  @Post('/create')
  create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto)
    this.catService.create(createCatDto)
    return "创建成功"
  }


}
