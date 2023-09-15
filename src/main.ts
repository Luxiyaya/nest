import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { log } from './common/middleware/log.middleware'
import { G_LOG } from './common/middleware/globallog.middleware';
import { HttpExceptionFilter } from './common/exception/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  // abort 创建应用程序失败后抛出一个异常
  const app = await NestFactory.create(AppModule, { abortOnError: false, logger: false });
  app.enableCors();//node设置跨域
  // 全局中间件
  app.use(G_LOG)
  // 全局异常过滤器
  // app.useGlobalFilters(new HttpExceptionFilter())

  // 全局pip 验证
  app.useGlobalPipes(new ValidationPipe({
    // disableErrorMessages: true,   // 错误消息不会显示在响应正文中
    // whitelist: true,              // 自动删除不存在白名单【验证类中没有任何装饰器的属性】属性
    // forbidNonWhitelisted: true,   // 存在非白名单实属性的时候停止处理请求【同时也需要将whitelist设为ture】
    // transform: true,              // 启用自动转换【可以将有效载荷转换为根据DTO类类型化的对象】

  }))
  await app.listen(9000);
}
bootstrap();
