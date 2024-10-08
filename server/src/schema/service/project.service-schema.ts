import { ArgsType, Field, ObjectType } from '@nestjs/graphql';
import { ProjectSchema } from '../model/project.schema';

@ArgsType()
export class GetAllProjectsSchema {}

@ObjectType()
export class GetAllProjectsResponseSchema {
  @Field(() => [ProjectSchema])
  project: ProjectSchema[];

  @Field({ nullable: true })
  listLength?: number;
}

@ArgsType()
export class GetCategoryNameAndIdSchema {}

@ObjectType()
export class GetCategoryNameAndIdResponeSchema {
  @Field(() => String)
  categoryEn: string;

  @Field(() => Number)
  categoryId: number;
}

@ArgsType()
export class GetProjectByCategorySchema {
  @Field()
  categoryId: number;
}

@ObjectType()
export class GetProjectByCategoryResponseSchema {
  @Field(() => [ProjectSchema])
  project: ProjectSchema[];

  @Field({ nullable: true })
  listLength?: number;
}
