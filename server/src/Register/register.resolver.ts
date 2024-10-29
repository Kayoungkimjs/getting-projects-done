import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Register } from 'src/entities/Register';
import { RegisterService } from './register.service';
import {
  CreateProjectSchema,
  RegisterResponse,
} from 'src/schema/model/register.schema';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { UserService } from 'src/user/user.service';
import { GetRegistersByUserIdResponseSchema } from 'src/schema/service/register.service-schema';
import { User } from 'src/entities/Users';

@Resolver(() => Register)
export class RegisterResolver {
  constructor(
    private registerService: RegisterService,
    private userService: UserService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => RegisterResponse)
  async registerProject(
    @Args('input') input: CreateProjectSchema,
    @Context() context: { req: { user: User } },
  ): Promise<RegisterResponse> {
    const userId = context.req.user.userId;
    console.log('UserId from context:', userId);

    const user = await this.userService.getUserById(userId);
    if (!user || !user.uid) {
      throw new Error('User not found or user id is null');
    }
    return this.registerService.registerProject(input, user);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => GetRegistersByUserIdResponseSchema)
  async getRegistersByUserId(
    @Context() context: { req: { user: User } },
  ): Promise<GetRegistersByUserIdResponseSchema> {
    const userId = context.req.user.userId;

    if (!userId) {
      throw new Error('User ID is required');
    }

    const registers = await this.registerService.getRegistersByUserId(userId);

    return {
      registers: registers,
    };
  }
}
