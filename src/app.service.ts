// 具有单一方法的基本服务
import { Injectable } from '@nestjs/common';
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { Query } from '@nestjs/common';

@Injectable()
export class AppService {
  private user = ""

  getHello(): string {
    return 'Hello World!';
  }
  
  setUser(user) {
    this.user = user as string
    return 'ok'
  }

  getUser() {
    return this.user
  }

}
