import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from 'src/entities/Projects';
import { ProjectRepo } from 'src/project/project.repo';
import { ProjectService } from './project.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  exports: [ProjectService, ProjectRepo],
  providers: [ProjectService, ProjectRepo],
})
export class ProjectModule {}
