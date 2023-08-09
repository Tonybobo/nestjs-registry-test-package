import { User } from './user.entity';
import { CreateUserDto } from './user.dto';
import { UserRepository } from './user.dao';
export declare class UserService {
    private readonly repository;
    constructor(repository: UserRepository);
    getUser(id: number): Promise<User>;
    createUser(body: CreateUserDto): Promise<User | User[]>;
}
