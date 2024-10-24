import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterRepo } from './register.repo';
import { User } from 'src/entities/Users';
import { Register } from 'src/entities/Register';
import {
  CreateProjectSchema,
  RegisterResponse,
} from 'src/schema/model/register.schema';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(Register)
    private registerRepo: RegisterRepo,
  ) {}

  async registerProject(
    input: CreateProjectSchema,
    user: User,
  ): Promise<RegisterResponse> {
    const newProject = this.registerRepo.create({
      projectName: input.projectName,
      description: input.description,
      categoryId: input.categoryId,
      user: user,
    });

    return await this.registerRepo.save(newProject);
  }

  async getRegistersByUserId(userId: string): Promise<RegisterResponse[]> {
    if (!userId) {
      throw new Error('User ID is required');
    }

    try {
      return await this.registerRepo.find({
        where: { user: { userId } },
        relations: ['user'],
      });
    } catch (error) {
      console.error('Error fetching registers:', error);
      throw new Error('Unable to fetch registers. Please try again later.');
    }
  }
}
