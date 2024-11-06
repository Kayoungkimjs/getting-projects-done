import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Project } from 'src/types/project';

@ObjectType('ProjectSchema')
@InputType('ProjectInputSchema')
export class ProjectSchema implements Project {
  @Field()
  projectId: number;

  @Field()
  categoryId: number;

  @Field({ nullable: true })
  categoryKr?: string;

  @Field({ nullable: true })
  categoryEn?: string;

  @Field({ nullable: true })
  endpoint?: string;

  @Field({ nullable: true })
  testType?: string;

  @Field({ nullable: true })
  testName?: string;

  @Field({ nullable: true })
  criteria?: string;
}
