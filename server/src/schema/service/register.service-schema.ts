import { ArgsType, Field, ObjectType } from '@nestjs/graphql';
import { RegisterResponse } from '../model/register.schema';

@ArgsType()
export class GetRegistersByUserIdSchema {
  @Field(() => String)
  userId: string;
}

@ObjectType()
export class GetRegistersByUserIdResponseSchema {
  @Field(() => [RegisterResponse], { nullable: true })
  registers?: RegisterResponse[];
}
