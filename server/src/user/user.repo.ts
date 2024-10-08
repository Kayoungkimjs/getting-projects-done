import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/entities/Users';

@Injectable()
export class UserRepo extends Repository<User> {}
