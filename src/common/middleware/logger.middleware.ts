import { Req, Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

// 可注入的依赖
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('中间件Request...');
    next();
    console.log('中间件response, 洋葱模型返回')
  }
}