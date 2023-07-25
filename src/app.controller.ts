// 具有单一路由的控制器
import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { Query } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,) { }


  @Get()
  getHello(): string {
    return this.appService.getHello();
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
}
