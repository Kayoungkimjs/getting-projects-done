import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { UserProject } from 'src/types/userProject';
import { UserSchema } from './user.schema';

@ObjectType('UserProjectSchema')
@InputType('UserProjectInputSchema')
export class UserProjectSchema implements UserProject {
  @Field()
  userProjectId: number;

  @Field({ nullable: true })
  notes?: string;

  @Field({ nullable: true })
  result?: number;

  @Field({ nullable: true })
  status?: number;

  @Field({ nullable: true })
  priority?: number;

  @Field({ nullable: true })
  createdAt?: string;

  @Field({ nullable: true })
  updatedAt?: string;

  @Field(() => UserSchema)
  user: UserSchema;
}
