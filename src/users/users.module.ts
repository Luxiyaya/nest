import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';


@Module({
  // 该模块使用forFeature来定义在当前作用域注册了哪些存储库
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule { }