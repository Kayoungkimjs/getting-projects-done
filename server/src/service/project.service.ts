import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/entities/Projects';
import { ProjectRepo } from 'src/repostory/project.repo';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepo: ProjectRepo,
  ) {}

  async getProjectByCategory(categoryId: number): Promise<Project[]> {
    return await this.projectRepo.find({
      where: {
        categoryId,
      },
    });
  }
}
