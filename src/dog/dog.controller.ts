import { Controller, Get, Res, Req, HttpCode, Post, Redirect, Query, Param, Body, HttpStatus, HttpException, UseFilters, HttpVersionNotSupportedException, ConflictException, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { log } from 'console';
import { Response, Request } from 'express';
import { Observable, of } from 'rxjs';
import { CreateDogDto } from './create.dog.dto';
import { Dog } from './interface/dog.interface';
import { DogService } from './dog.service';
import { AppService } from './../app.service';
import { ForbiddenException } from './../common/exception/ForbiddenException';
import { HttpExceptionFilter } from '../common/exception/http-exception.filter'
import { BaseExceptionFilter } from '@nestjs/core';

@Controller('dog')
// @UseFilters(new HttpExceptionFilter())
export class DogController {
  constructor(private dogService: DogService, private appService: AppService) { }

  @Get('/breed')
  findAll(@Req() request: Request): string {
    console.log(request)
    return 'This action returns all cats'
  }

  @Get('/')
  findA(): String {
    return "这个动作返回了一只狗！"
  }

  @Get('abc*f')
  findB(): String {
    return "通配符匹配"
  }

  @Get('/a')
  @Redirect('https://nestjs.com', 301)
  findC(): String {
    return "POST请求"
  }

  @Get('/query/:id')
  findD(@Param() params: any): String {
    console.log(params.id);

    return "query请求参数"
  }



  @Get('async')
  async findE(): Promise<any[]> {
    return []
  }

  // Rxjs可观察流
  @Get('rx')
  findF(): Observable<any[]> {
    return of([])
  }

  // body
  @Post('body1')
  async findG(@Body() createDogDto: CreateDogDto) {
    console.log(createDogDto)
    return 'This action adds a new dog';
  }


  // 特定的响应对象
  @Post('spec')
  create(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK)
    return [];
  }

  @Get('cc')
  findH(@Res() res: Response) {
    res.status(HttpStatus.OK).json([]);
  }



  @Post('create')
  async createddd(@Body() createDogDto: CreateDogDto) {
    this.dogService.create(createDogDto)

  }

  @Post('findall')
  async findeF(): Promise<Dog[]> {
    return this.dogService.findAll()
  }

  @Get('/app')
  findY(): String {
    return this.appService.getHello()
  }

  @Get('/set')
  setUser(@Req() req: Request) {
    console.log(req.query)
    const { query } = req
    const { user } = query
    this.appService.setUser(user)
    return 'success成功'
  }

  @Get('/get')
  getUser() {
    return this.appService.getUser()
  }

  @Get('/yichang')
  getException() {
    throw new HttpException({
      status: HttpStatus.AMBIGUOUS,
      error: 'This is a custom message',
    }, HttpStatus.FORBIDDEN,)
  }

  @Get('/custom')
  getCustom() {
    throw new ForbiddenException()
  }

  @Get('/filter')
  @UseFilters(new HttpExceptionFilter())
  getFilter() {
    throw new HttpException({
      status: HttpStatus.AMBIGUOUS,
      error: 'This is a custom message',
    }, HttpStatus.FORBIDDEN,)
  }

  @Get('/otheryc')
  getOtherException() {
    console.log(333)
    throw new HttpException({
      status: HttpStatus.AMBIGUOUS,
      error: 'This is a custom message',
    }, HttpStatus.FORBIDDEN,)
  }

  // 给管道传递一个类 框架实例化
  @Get('/pipe/:id')
  async getPipe(@Param('id', ParseIntPipe) id: number) {
    return this.dogService.getHello()
  }

  // 管道注入实例化对象    验证路由参数
  @Get('/pips/:ids')
  async getPipes(@Param('ids', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) sdfsdfdsf: number) {

    console.log(sdfsdfdsf)
    throw new HttpException({
      status: HttpStatus.AMBIGUOUS,
      error: 'This is a custom message',
    }, HttpStatus.FORBIDDEN,)

    return this.dogService.getHello()
  }

  // 验证查询参数
  @Get('/pipsl/q')
  getPipesQuery(@Query('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    console.log(id)
    return this.dogService.getHello()
  }

  // 验证uuid
  @Get(':uuid')
  async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    console.log('...', uuid)
    return this.dogService.getHello()
  }



}
