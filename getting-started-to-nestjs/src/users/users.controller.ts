import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
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
}
