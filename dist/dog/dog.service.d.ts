import { Dog } from './interface/dog.interface';
export declare class DogService {
    private readonly dogs;
    create(dog: Dog): void;
    findAll(): Dog[];
    getHello(): string;
}
