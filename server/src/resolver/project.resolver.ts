import { Args, Query, Resolver } from '@nestjs/graphql';
import {
  GetProjectByCategoryResponseSchema,
  GetProjectByCategorySchema,
} from 'src/schema/service/project.service-schema';
import { ProjectService } from 'src/service/project.service';

@Resolver()
export class ProjectResolver {
  constructor(private projectService: ProjectService) {}

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

//   @Mutation(() => UpdateBookResponseSchema)
//   async updateBook(@Args() args: UpdateBookRequestSchema) {
//     const { book } = args;

//     const updatedBook = await this.bookService.updateBook(book);

//     return {
//       book: updatedBook,
//     };
//   }
