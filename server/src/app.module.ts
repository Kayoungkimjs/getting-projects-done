import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { User } from './entities/Users';
import { UserResolver } from './user/user.resolver';
import { UserModule } from './user/user.module';
import { AuthResolver } from './auth/auth.resolver';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProjectModule } from './project/project.module';
import { ProjectResolver } from './project/project.resolver';

@Module({
  imports: [
    ProjectModule,
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'gpd.sqlite',
      entities: [User],
      autoLoadEntities: true,
      synchronize: true, // 개발 중일 때만 true로 설정, 프로덕션에서는 false로 설정
      namingStrategy: new SnakeNamingStrategy(),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: { path: '../graphql/schema.graphql' },
    }),
    ConfigModule.forRoot(),
  ],

  providers: [AuthResolver, ProjectResolver, UserResolver],
})
export class AppModule {}
