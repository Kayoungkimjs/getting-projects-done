import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Bearer Token 형식으로 JWT를 추출
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET, // 비밀 키
    });
  }

  async validate(payload: any) {
    return { userId: payload.userId }; // payload에서 userId를 받아옴
  }

  // async validate(payload: any) {
  //   console.log('Validating payload:', payload);
  //   const user = await this.authService.getUserById(payload.userId); // userId로 유저 검증
  //   if (!user) {
  //     console.log('User not found:');
  //     throw new UnauthorizedException(); // 유저가 없으면 예외 발생
  //   }
  //   console.log('User found:', user); // 찾은 유저 로그
  //   return user; // 유저 반환
  // }
}
