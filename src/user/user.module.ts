import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { UserRepository } from "./user.dao";
import { UserService } from "./user.service";
import { AwsSNSModule } from "@tonybobo/nestjs-registry/dist/shared/aws/sns/index";
import { AwsS3Module } from "@tonybobo/nestjs-registry/dist/shared/aws/s3/index";
@Module({
  imports: [TypeOrmModule.forFeature([User]), AwsSNSModule, AwsS3Module],
  controllers: [UserController],
  providers: [UserRepository, UserService],
})
export class UserModule {}
