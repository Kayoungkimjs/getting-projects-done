import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Login } from 'src/types/login';

@ObjectType('LoginSchema')
@InputType('LoginInputSchema')
export class LoginResponse implements Login {
  @Field()
  userId: string;

  @Field()
  accessToken: string;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  email?: string;
}
