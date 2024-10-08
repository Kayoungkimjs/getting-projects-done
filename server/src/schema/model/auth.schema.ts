import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Auth } from 'typeorm';

@ObjectType('AuthSchema')
@InputType('AuthInputSchema')
export class AuthCredentials implements Auth {
  @Field()
  userId: string;

  @Field()
  password: string;
}
