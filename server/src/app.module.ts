import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ProjectModule } from './modules/project.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { rootResolvers } from './resolver';

@Module({
  imports: [
    ProjectModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'gpd.sqlite',
      autoLoadEntities: true,
      synchronize: false,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: { path: '../grapql/schema.graphql' },
    }),
  ],

  providers: [...rootResolvers],
})
export class AppModule {}
