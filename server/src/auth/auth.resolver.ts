import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/entities/Users';
import { AuthService } from './auth.service';
import { AuthCredentials } from 'src/schema/model/auth.schema';
import { LoginResponse } from 'src/schema/model/login.schema';

@Resolver(() => User)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  async login(
    @Args('input') authCredentials: AuthCredentials,
  ): Promise<LoginResponse> {
    const { accessToken, userId } =
      await this.authService.login(authCredentials);
    return { accessToken, userId };
  }
}
