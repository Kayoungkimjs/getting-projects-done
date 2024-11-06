import { Field, InputType, ObjectType } from '@nestjs/graphql';

import { User } from 'src/types/user';
import { RegisterResponse } from './register.schema';
import { UserProjectSchema } from './userProject.schema';

@ObjectType('UserSchema')
@InputType('UserInputSchema')
export class UserSchema implements User {
  @Field()
  uid: number;

  @Field()
  userId: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  createdAt?: string;

  @Field({ nullable: true })
  updatedAt?: string;

  @Field(() => [RegisterResponse])
  register: RegisterResponse[];

  @Field(() => [UserProjectSchema])
  userProject?: UserProjectSchema[];
}
