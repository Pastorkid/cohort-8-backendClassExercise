import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  updateUser(): string {
    return 'updateUser';
  }
  deleteUser(): string {
    return 'deleteUser';
  }
}
