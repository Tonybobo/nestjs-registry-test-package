import { Test } from "./test.entity";
import { Repository } from "typeorm";
import { BaseRepository } from "@tonybobo/nestjs-registry/dist/common/crud/base";
export declare class TestRepository extends BaseRepository<Test> {
    private readonly repository;
    constructor(repository: Repository<Test>);
}
