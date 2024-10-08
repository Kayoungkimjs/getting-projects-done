import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Project } from 'types/project';

@ObjectType('ProjectSchema')
@InputType('ProjectInputSchema')
export class ProjectSchema implements Project {
  @Field()
  id: number;

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

  @Field()
  criteria: string;

  @Field({ nullable: true })
  notes?: string;

  @Field({ nullable: true })
  result?: number;

  @Field({ nullable: true })
  status?: number;

  @Field({ nullable: true })
  priority?: number;
}
