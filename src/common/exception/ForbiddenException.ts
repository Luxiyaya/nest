import { HttpException, HttpStatus } from "@nestjs/common";

// 自定义异常
export class ForbiddenException extends HttpException {
  constructor() {
    console.log('1...自定义异常类')
    super('自定义异常', HttpStatus.FORBIDDEN);
  }
}