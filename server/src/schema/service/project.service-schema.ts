import { ArgsType, Field, ObjectType } from '@nestjs/graphql';
import { ProjectSchema } from '../model/project.schema';

// @ArgsType()
// export class ListProjectsRequestSchema {
//   @Field(() => ListOptionSchema, { nullable: true })
//   listOption?: ListOption;
// }

// @ObjectType()
// export class ListProjectsResponseSchema {
//   @Field(() => [ProjectSchema])
//   projectList: Project[];

//   @Field({ nullable: true })
//   listLength?: number;
// }

// 요청 스키마
@ArgsType()
export class GetProjectByCategorySchema {
  @Field()
  categoryId: number;
}

// 응답 스키마
@ObjectType()
export class GetProjectByCategoryResponseSchema {
  @Field(() => [ProjectSchema])
  project: ProjectSchema[]; // 카테고리에 해당하는 프로젝트 배열

  @Field({ nullable: true })
  listLength?: number; // 프로젝트 목록의 길이 (선택 사항)
}
