import { ExceptionFilter, Catch, ArgumentsHost, HttpException, } from '@nestjs/common';
import { Request, Response } from 'express';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch(HttpException,)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log('2...过滤器')
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}