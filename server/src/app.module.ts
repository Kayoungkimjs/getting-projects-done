import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { UserResolver } from './user/user.resolver';
import { UserModule } from './user/user.module';
import { AuthResolver } from './auth/auth.resolver';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProjectModule } from './project/project.module';
import { ProjectResolver } from './project/project.resolver';
import { RegisterModule } from './register/register.module';
import { RegisterResolver } from './register/register.resolver';

@Module({
  imports: [
    RegisterModule,
    ProjectModule,
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '/Users/kim_kayoung/Desktop/project/gpd/server/gpd.db',
      autoLoadEntities: true,
      synchronize: true, //프로덕션시 false
      namingStrategy: new SnakeNamingStrategy(),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: { path: '../graphql/schema.graphql' },
      context: ({ req }: any) => {
        const user = req.user;
        return { user };
      },
    }),
    ConfigModule.forRoot(),
  ],

  providers: [RegisterResolver, AuthResolver, ProjectResolver, UserResolver],
})
export class AppModule {}
