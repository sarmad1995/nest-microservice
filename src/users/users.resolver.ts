import { Query, Resolver, Args } from '@nestjs/graphql';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(() => User)
  async getUserById(@Args('id') id: number): Promise<User> {
    return this.usersService.findById(id);
  }
}
