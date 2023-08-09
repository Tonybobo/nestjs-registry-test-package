import { Repository } from "typeorm";
import { User } from "./user.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "@tonybobo/nestjs-registry/dist/common/crud/base";
@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>
  ) {
    super(repository);
  }
}
