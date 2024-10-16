import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/entities/Users';
import { UserRepo } from './user.repo';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: UserRepo,
  ) {}

  async getUserById(userId: string): Promise<User> {
    const user = await this.userRepo.findOne({ where: { userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found.`);
    }
    return user;
  }

  // async getCurrentUser(userId: string): Promise<User | null> {
  //   return this.userRepo.findOne({ where: { userId } }); // ID로 사용자 검색
  // }
}
