import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from 'src/entities/Users';
import { UserSchema } from 'src/schema/model/user.schema';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => UserSchema)
  async getUserById(@Args('userId') userId: string): Promise<UserSchema> {
    return this.userService.getUserById(userId);
  }
}
