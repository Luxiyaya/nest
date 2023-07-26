import { Controller, Get, Post, Body } from '@nestjs/common';
import { DobuleService } from './dobule.service';
import { CreateCatDto } from 'src/dto/create-cat.dto';


@Controller('dobule')
export class DobuleController {
  constructor(private catService: DobuleService) { }

  @Get()
  findAll(): String {
    return "这个动作返回了一只猫！"
  }

  @Post('/create')
  create(@Body() createCatDto: CreateCatDto) {
    this.catService.findAll()
    return "创建成功"
  }

}
