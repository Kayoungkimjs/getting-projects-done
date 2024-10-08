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

  // async createUser(
  //   userId: string,
  //   password: string,
  //   email: string,
  // ): Promise<User> {
  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   const user = this.userRepo.create({
  //     userId,
  //     password: hashedPassword,
  //     email,
  //   });
  //   return await this.userRepo.save(user);
  // }

  async getUserById(userId: string): Promise<User> {
    const user = await this.userRepo.findOne({ where: { userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found.`);
    }
    return user;
  }
}
