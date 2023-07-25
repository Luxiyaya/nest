import { Controller, Get, Param, Query } from "@nestjs/common";
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get('/')
  getone() {
    return 'users'
  }

  @Get('/getAll')
  getAll() {
    return this.usersService.findAll()
  }

  @Get('/getById/:id')
  getById(@Param() params: any) {
    console.log(params.id)
    return this.usersService.findOne(params.id)
  }

  @Get('/remove/:id')
  removeById(@Param() params: any) {
    return this.usersService.remove(params.id)
  }
}