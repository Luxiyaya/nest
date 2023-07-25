// 定义函数式中间件

import { Request, Response, NextFunction } from 'express'

export function log(req: Request, res: Response, next: NextFunction) {
  console.log('log  。。。 request')
  next()
  console.log('log ... 洋葱模型处理');
}