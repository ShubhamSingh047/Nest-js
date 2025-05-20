import { Controller, Get, Param, Post, Patch, Body } from '@nestjs/common';
import { CreatUserDtos } from 'src/users/dtos/create-users.dto';
import { GetUserParamDto } from 'src/users/dtos/get-user-params.dto';
import { PatchUserDto } from 'src/users/dtos/patch-users.dto';
import { UsersService } from 'src/users/providers/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get(['', ':id'])
  public getUsers(@Param() getUserParamDto: GetUserParamDto) {
    console.log(getUserParamDto instanceof GetUserParamDto);
    return 'this is a get request to user end point';
  }

  @Post()
  public postUser(@Body() createUserDto: CreatUserDtos) {
    console.log(createUserDto);
    return 'this is a post request to user end point';
  }

  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    console.log(patchUserDto);
    return 'this is a patch request to user end point';
  }
}
