import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/entities/Users';

@Injectable()
export class AuthRepo extends Repository<User> {}
