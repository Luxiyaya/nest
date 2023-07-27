import { PartialType, PickType, OmitType } from '@nestjs/mapped-types'

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

// export class UpdateCatDto extends PartialType(CreateCatDto) {

// }


export class UpdateCatAgeDto extends PickType(CreateCatDto, ['age'] as const) { }


// 返回一个新类型，except包含name属性的剩余可选属性
export class UpdateCatDto extends PartialType(
  OmitType(CreateCatDto, ['name'] as const)
) { }

