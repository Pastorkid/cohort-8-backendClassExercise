import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseFloatPipe,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { CreateUserDto } from './dto/createUser.dto.js';
import { ParseIntPipePipe } from './pipes/parse-int-pipe/parse-int-pipe.pipe.js';
import { UsersService } from './users.service.js';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get('all')
  getUsers() {
    return this.userService.fetchUsers();
  }

  // @Post('create')
  // createUser(@Req() request: Request, @Res() response: Response) {
  //   console.log(request.body);
  //   response.send('create user');
  // }

  @Post('create')
  createUser(@Body() userPayload: CreateUserDto) {
    console.log('userPayload', userPayload);
    return this.userService.createUser(userPayload);
  }
  //demostare dynamic route with express approcah
  // @Get(':id')
  // getUserById(@Req() request: Request, @Res() response: Response) {
  //   console.log(request.params);
  //   response.send(`get user by id ${request.params.id}`);
  // }

  @Get('query')
  getUserAcendingOrder(
    @Query('asc', ParseBoolPipe) asc: boolean,
    @Query('sortBy') sortBy: string,
  ) {
    console.log(asc, sortBy);
    return `get user by ascending order ${asc} and sort by ${sortBy}`;
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipePipe) id: number) {
    console.log(id);
    return this.userService.findUserById(id);
  }

  @Get(':id/:postId/:likeId')
  getUserByIdAndPosId(
    @Param('id', ParseIntPipe) id: number,
    @Param('postId', ParseIntPipe) postId: number,
    @Param('likeId', ParseIntPipe) likeId: number,
  ) {
    console.log(id, postId, likeId);
    return `get user by id ${id} and post id ${postId} and like id ${likeId}`;
  }
}
