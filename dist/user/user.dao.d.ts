import { Repository } from "typeorm";
import { User } from "./user.entity";
import { BaseRepository } from "@tonybobo/nestjs-registry/dist/common/crud/base";
export declare class UserRepository extends BaseRepository<User> {
    private readonly repository;
    constructor(repository: Repository<User>);
}
