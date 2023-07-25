import { Injectable } from '@nestjs/common';
import { Dog } from './interface/dog.interface';

@Injectable()
export class DogService {
  private readonly dogs: Dog[] = []

  create(dog: Dog) {
    console.log(dog)
    this.dogs.push(dog)
  }

  findAll(): Dog[] {
    return this.dogs
  }

  getHello(): string {
    return 'hello gou'
  }

}
