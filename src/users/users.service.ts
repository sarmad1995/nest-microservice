import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      email: 'sarmad.shah@gmail.com',
      id: 123,
      username: 'sarmadshah',
    },
    {
      email: 'suahib.khan@gmail.com',
      id: 123,
      username: 'suhaibkhan',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findById(id: number): User {
    const user = this.users.find((u) => u.id === id);
    if (user) {
      return user;
    }
    throw new NotFoundException('No User Found');
  }

  // Add more methods as required
}
