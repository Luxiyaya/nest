import { IsEmail, IsNotEmpty } from "class-validator";

export class CteateUserDto {
  @IsEmail()
  email: string

  @IsNotEmpty()
  password: string
}