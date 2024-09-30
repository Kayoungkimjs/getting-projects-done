import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Project } from 'types/project';

@ObjectType('ProjectSchema')
@InputType('ProjectInputSchema')
export class ProjectSchema implements Project {
  @Field()
  id: number;

  @Field()
  categoryId: number;

  @Field()
  categoryKr: string;

  @Field()
  categoryEn: string;

  @Field()
  endpoint: string;

  @Field()
  testType: string;

  @Field()
  testName: string;

  @Field()
  criteria: string;

  @Field({ nullable: true })
  notes: string;

  @Field({ nullable: true })
  result: number;

  @Field({ nullable: true })
  status: number;

  @Field({ nullable: true })
  priority: number;
}
