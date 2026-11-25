import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto.js';

@Injectable()
export class UsersService {
  fakeUsers = [
    {
      name: 'Miracle Tijani',
      email: 'miracle.tijani@example.com',
    },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(user: CreateUserDto) {
    this.fakeUsers.push(user);
    return {
      user: user,
      sucess: 'user create sucessfully',
    };
  }

  findUserById(id: number) {
    return { id, name: 'miracle', email: 'm@gmail.com' };
  }
}
