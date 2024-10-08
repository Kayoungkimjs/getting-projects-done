import * as bcrypt from 'bcryptjs';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/entities/Users';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentials } from 'src/schema/model/auth.schema';
import { LoginResponse } from 'src/schema/model/login.schema';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(userId: string, password: string): Promise<User | null> {
    const user = await this.userService.getUserById(userId);
    console.log('Fetched user:', user); // 유저 정보 로그
    console.log(
      'Comparing password:',
      password,
      'with hashed:',
      user?.password,
    ); // 비밀번호 비교 로그
    if (user && (await bcrypt.compare(password, user.password))) {
      console.log('Password matches!');
      return user; // 비밀번호가 일치할 경우 사용자 반환
    } else {
      console.log('Password does not match');
      return null;
    }
  }

  async login(authCredentials: AuthCredentials): Promise<LoginResponse> {
    const user = await this.validateUser(
      authCredentials.userId,
      authCredentials.password,
    );

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { userId: user.userId, sub: user.id }; // JWT Payload 설정
    const secretKey = this.configService.get<string>('JWT_SECRET');
    const accessToken = this.jwtService.sign(payload, { secret: secretKey }); // JWT 토큰 생성

    return {
      userId: user.userId,
      accessToken: accessToken,
      email: user.email,
    };
  }
}
