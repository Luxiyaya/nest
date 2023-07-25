import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { log } from './common/middleware/log.middleware'
import { G_LOG } from './common/middleware/globallog.middleware';
import { HttpExceptionFilter } from './common/exception/http-exception.filter';

async function bootstrap() {
  // abort 创建应用程序失败后抛出一个异常
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  // 全局中间件
  app.use(G_LOG)
  // 全局异常过滤器
  // app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(9000);
}
bootstrap();
