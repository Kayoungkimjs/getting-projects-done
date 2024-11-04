import { Injectable } from '@nestjs/common';
import { Register } from 'src/entities/Register';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterRepo extends Repository<Register> {}
