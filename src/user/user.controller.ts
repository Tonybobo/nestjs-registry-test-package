import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
  Post,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreateUserDto } from "./user.dto";
import { User } from "./user.entity";
import { UserService } from "./user.service";
import S3Service from "@tonybobo/nestjs-registry/dist/shared/aws/s3/s3.service";

@Controller("user")
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;
  constructor(private readonly s3: S3Service) {}

  // @Get(":id")
  // public getUser(@Param("id", ParseIntPipe) id: number): Promise<User> {
  //   return this.service.getUser(id);
  // }

  @Post("upload")
  @UseInterceptors(FileInterceptor("file"))
  publish(@UploadedFile() file: any) {
    console.log(file);
    this.s3.upload("test-nestjs-registry", "test2", file.buffer, file.mimetype);
    return "done";
  }

  @Post()
  public createUser(@Body() body: CreateUserDto): Promise<User | User[]> {
    return this.service.createUser(body);
  }
}
