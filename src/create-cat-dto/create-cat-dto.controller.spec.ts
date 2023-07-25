import { Test, TestingModule } from '@nestjs/testing';
import { CreateCatDtoController } from './create-cat-dto.controller';

describe('CreateCatDtoController', () => {
  let controller: CreateCatDtoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateCatDtoController],
    }).compile();

    controller = module.get<CreateCatDtoController>(CreateCatDtoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
