import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategty';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { AuthRepo } from './auth.repo';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    ConfigModule,
  ],
  providers: [AuthService, AuthRepo, LocalStrategy],
  exports: [AuthService, AuthRepo],
})
export class AuthModule {}
