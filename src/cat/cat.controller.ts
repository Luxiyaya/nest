import { Controller, Get } from '@nestjs/common';

@Controller('cat')
export class CatController {
  @Get()
  findAll(): String {
    return "这个动作返回了一只猫！"
  }
}
