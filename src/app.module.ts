// 应用程序的根模块
import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { DogController } from './dog/dog.controller';
import { CreateCatDtoController } from './create-cat-dto/create-cat-dto.controller';
import { DogService } from './dog/dog.service';
import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';
import { log } from './common/middleware/log.middleware';



@Module({
  imports: [CatModule, DogModule],
  controllers: [AppController, CatController, DogController, CreateCatDtoController],
  providers: [AppService, DogService],
})
export class AppModule implements NestModule {
  // 配置中间件 consumer 中间件消费者 
  configure(consumer: MiddlewareConsumer) {
    consumer
      // 函数shi中间件
      // .apply(log)
      // .forRoutes(DogController)


      // 多个中间件
      .apply(log, LoggerMiddleware)
      .forRoutes(DogController, CatController)


    // .apply(LoggerMiddleware)
    // .exclude({
    //   path: '/dog/query',
    //   method: RequestMethod.GET,
    // })
    // .forRoutes(DogController)

    // .forRoutes({ path: '/dog/query/cccawdf', method: RequestMethod.GET });
  }

}
