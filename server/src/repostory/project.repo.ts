import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Project } from 'src/entities/Projects';

@Injectable()
export class ProjectRepo extends Repository<Project> {}
