import { Args, Query, Resolver } from '@nestjs/graphql';
import {
  GetAllProjectsResponseSchema,
  GetCategoryNameAndIdResponeSchema,
  GetProjectByCategoryResponseSchema,
  GetProjectByCategorySchema,
} from 'src/schema/service/project.service-schema';
import { ProjectService } from './project.service';

@Resolver()
export class ProjectResolver {
  constructor(private projectService: ProjectService) {}

  @Query(() => GetAllProjectsResponseSchema)
  async getAllProjects(): Promise<GetAllProjectsResponseSchema> {
    const projects = await this.projectService.getAllProjects();
    return {
      project: projects,
      listLength: projects.length,
    };
  }

  @Query(() => [GetCategoryNameAndIdResponeSchema])
  async getCategoryNameAndId(): Promise<GetCategoryNameAndIdResponeSchema[]> {
    return this.projectService.getCategoryNameAndId(); // 서비스에서 호출
  }

  @Query(() => GetProjectByCategoryResponseSchema)
  async getProjectByCategory(
    @Args() args: GetProjectByCategorySchema,
  ): Promise<GetProjectByCategoryResponseSchema> {
    const { categoryId } = args;

    const projects = await this.projectService.getProjectByCategory(categoryId);

    return {
      project: projects,
      listLength: projects.length,
    };
  }
}
