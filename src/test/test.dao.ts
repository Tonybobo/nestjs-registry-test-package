import { Injectable } from "@nestjs/common";
import { Test } from "./test.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepository } from "@tonybobo/nestjs-registry/dist/common/crud/base";

@Injectable()
export class TestRepository extends BaseRepository<Test> {
  constructor(
    @InjectRepository(Test) private readonly repository: Repository<Test>
  ) {
    super(repository);
  }
}
