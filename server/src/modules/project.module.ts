import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from 'src/entities/Projects';
import { ProjectRepo } from 'src/repostory/project.repo';
import { ProjectService } from 'src/service/project.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  exports: [ProjectService, ProjectRepo],
  providers: [ProjectService, ProjectRepo],
})
export class ProjectModule {}
