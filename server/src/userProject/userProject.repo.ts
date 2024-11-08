import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserProject } from 'src/entities/UserProject';

@Injectable()
export class UserProjectRepo extends Repository<UserProject> {}
