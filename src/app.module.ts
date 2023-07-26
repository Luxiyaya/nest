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
// --- typeORM 集成---
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity'
import { DataSource } from 'typeorm'
// import { UsersModule } from './users/users.module';

// --- sequelize 集成---
import { SequelizeModule } from '@nestjs/sequelize'






@Module({
  imports: [CatModule, DogModule,
    // /** typeORM集成 */
    // UsersModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'test',
    //   entities: [User],
    //   synchronize: true,
    // })
    
    /** sequelize */
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'sequelize',
      models: [],
    }),
  ],
  controllers: [AppController, CatController, DogController, CreateCatDtoController],
  providers: [AppService, DogService],
})
export class AppModule implements NestModule {
  // constructor(private dataSource: DataSource) { }
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
