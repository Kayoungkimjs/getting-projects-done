import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/entities/Projects';
import { ProjectRepo } from 'src/project/project.repo';
import { ProjectSchema } from 'src/schema/model/project.schema';
import { GetCategoryNameAndIdResponeSchema } from 'src/schema/service/project.service-schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepo: ProjectRepo,
  ) {}

  async getAllProjects(): Promise<ProjectSchema[]> {
    return await this.projectRepo.find();
  }

  async getCategoryNameAndId(): Promise<GetCategoryNameAndIdResponeSchema[]> {
    const categories = await this.projectRepo
      .createQueryBuilder('project')
      .select(
        'DISTINCT project.categoryEn AS categoryEn, project.categoryId AS categoryId',
      )
      .getRawMany();

    return categories.map((cat) => ({
      categoryEn: cat.categoryEn,
      categoryId: cat.categoryId,
    }));
  }

  async getProjectByCategory(categoryId: number): Promise<Project[]> {
    return await this.projectRepo.find({
      where: {
        categoryId,
      },
    });
  }
}
