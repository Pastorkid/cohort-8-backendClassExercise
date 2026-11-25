import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { CreateUserDto } from './dto/createUser.dto.js';

@Controller('users')
export class UsersController {
  @Get('all')
  getUsers() {
    return [
      {
        id: 1,
        name: 'Miracle Tijani',
        email: 'miracle.tijani@example.com',
        password: '123456',
        role: 'admin',
      },
    ];
  }

  // @Post('create')
  // createUser(@Req() request: Request, @Res() response: Response) {
  //   console.log(request.body);
  //   response.send('create user');
  // }

  @Post('create')
  createUser(@Body() userPayload: CreateUserDto) {
    console.log('userPayload', userPayload);
    return 'create user';
  }
  //demostare dynamic route with express approcah
  // @Get(':id')
  // getUserById(@Req() request: Request, @Res() response: Response) {
  //   console.log(request.params);
  //   response.send(`get user by id ${request.params.id}`);
  // }

  @Get('query')
  getUserAcendingOrder(
    @Query('asc') asc: string,
    @Query('sortBy') sortBy: string,
  ) {
    console.log(asc, sortBy);
    return `get user by ascending order ${asc} and sort by ${sortBy}`;
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    console.log(id);
    return `get user by id ${id}`;
  }

  @Get(':id/:postId/:likeId')
  getUserByIdAndPosId(
    @Param('id') id: string,
    @Param('postId') postId: string,
    @Param('likeId') likeId: string,
  ) {
    console.log(id, postId, likeId);
    return `get user by id ${id} and post id ${postId} and like id ${likeId}`;
  }
}
