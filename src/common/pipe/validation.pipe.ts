import { PipeTransform, Injectable, ArgumentMetadata, } from "@nestjs/common";
// import { ObjectSchema  } from 'joi'


@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value, metadata);

    return value;

  }
}

