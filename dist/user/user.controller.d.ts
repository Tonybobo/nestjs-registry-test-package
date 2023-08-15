import { CreateUserDto } from "./user.dto";
import { User } from "./user.entity";
import S3Service from "@tonybobo/nestjs-registry/dist/shared/aws/s3/s3.service";
export declare class UserController {
    private readonly s3;
    private readonly service;
    constructor(s3: S3Service);
    publish(file: any): string;
    createUser(body: CreateUserDto): Promise<User | User[]>;
}
