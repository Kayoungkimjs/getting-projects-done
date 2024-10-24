import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Register } from 'types/register';

@Injectable()
export class RegisterRepo extends Repository<Register> {}
