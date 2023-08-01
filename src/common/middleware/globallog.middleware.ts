import { Request, Response, NextFunction } from 'express';

export function G_LOG(req: Request, res: Response, next: NextFunction) {
  console.log('global中间件。。req')
  next()
  console.log('global中间件。。交出控制权')
}
