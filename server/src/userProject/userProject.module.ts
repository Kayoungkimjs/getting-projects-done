import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProject } from 'src/entities/UserProject';
import { UserProjectRepo } from './userProject.repo';

@Module({
  imports: [TypeOrmModule.forFeature([UserProject])],
  exports: [UserProjectRepo],
  providers: [UserProjectRepo],
})
export class UserProjectModule {}
