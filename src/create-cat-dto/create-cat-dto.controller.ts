import { Controller, Get } from '@nestjs/common';

@Controller('create-cat-dto')
export class CreateCatDtoController {
  @Get('/')
  findAll(): String {
    return "createdCatDtoController类"
  }
}
