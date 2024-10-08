import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'userId', // userId를 사용자 이름으로 설정
      passwordField: 'password', // 비밀번호 필드 설정
    });
  }

  async validate(userId: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(userId, password);
    if (!user) {
      throw new UnauthorizedException(); // 인증 실패 시 예외 발생
    }
    return user; // 인증된 사용자 반환
  }
}
