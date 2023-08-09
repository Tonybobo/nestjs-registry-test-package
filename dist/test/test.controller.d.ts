import { CreateTestDto } from './test.dto';
import { Test } from './test.entity';
export declare class TestController {
    private readonly service;
    getTest(id: number): Promise<Test>;
    createTest(body: CreateTestDto): Promise<Test | Test[]>;
}
