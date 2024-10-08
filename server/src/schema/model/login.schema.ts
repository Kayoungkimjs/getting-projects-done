import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Login } from 'types/login';

@ObjectType('LoginSchema')
@InputType('LoginInputSchema')
export class LoginResponse implements Login {
  @Field()
  userId: string; // 사용자 ID

  @Field()
  accessToken: string; // JWT 또는 다른 형태의 토큰

  @Field({ nullable: true })
  username?: string; // 선택적으로 포함할 수 있는 사용자 이름

  @Field({ nullable: true })
  email?: string; // 선택적으로 포함할 수 있는 이메일
}
