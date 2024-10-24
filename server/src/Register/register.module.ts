import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Register } from 'src/entities/Register';
import { RegisterService } from './register.service';
import { RegisterRepo } from './register.repo';
import { User } from 'src/entities/Users';

@Module({
  imports: [TypeOrmModule.forFeature([User, Register])],
  exports: [RegisterService, RegisterRepo],
  providers: [RegisterService, RegisterRepo],
})
export class RegisterModule {}
