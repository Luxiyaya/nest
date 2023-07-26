import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository, DataSource } from "typeorm";


@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>,private  dataSource: DataSource) { }

  findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id })
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async createMany(users: User[]) {
    const queryRunner = this.dataSource.createQueryRunner();
  
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(users[0]);
      await queryRunner.manager.save(users[1]);
  
      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
  }
}