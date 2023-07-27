import { Controller, Get, Post, Body, Param, Query, ParseIntPipe, ParseBoolPipe, ParseArrayPipe } from '@nestjs/common';
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


  @Get('/getId/:id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query('sort', ParseBoolPipe) sort: boolean,
  ) {
    console.log(typeof id === 'number'); // true
    console.log(typeof sort === 'boolean'); // true
    return 'This action returns a user';
  }

  /** 请求参数为数组 
   * 
   * 一共四种传递方法
   * getIds?ids=1,2,3,4
   * getIds?ids=1&ids=2&ids=3&ids=4
   * getIds?ids[0]=1&ids[1]=2&ids[2]=3&ids[3]=4
   * getIds?ids[]=1&ids[]=2&ids[]=3&ids[]=4
  */
  @Get('/getIds')
  getIds(@Query('ids', new ParseArrayPipe({ items: Number, separator: ',' })) ids: number[]) {
    console.log(ids, ids[0])
    return 'this action returns users by ids'
  }





}
