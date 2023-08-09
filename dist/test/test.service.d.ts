import { TestRepository } from './test.dao';
import { CreateTestDto } from './test.dto';
import { Test } from './test.entity';
export declare class TestService {
    private readonly testDao;
    constructor(testDao: TestRepository);
    getTest(id: number): Promise<Test>;
    createTest(body: CreateTestDto): Promise<Test | Test[]>;
}
