import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Register } from 'types/register';
import { UserSchema } from './user.schema';

@ObjectType('RegisterResponse')
@InputType('RegisterInputSchema')
export class RegisterResponse implements Register {
  @Field()
  registerId: number;

  @Field({ nullable: true })
  projectName?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [String], { nullable: true })
  categoryId?: string[];

  @Field({ nullable: true })
  createdAt?: string;

  @Field(() => UserSchema)
  user: UserSchema;
}

@InputType('CreateProjectSchema')
export class CreateProjectSchema {
  @Field({ nullable: true })
  projectName?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [String], { nullable: true })
  categoryId?: string[];
}
