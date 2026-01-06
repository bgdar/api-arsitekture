import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { BooksModule } from './books-module/books.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // semua schema GraphQL si simpna 1 file di Root project
      autoSchemaFile : join(process.cwd(),"schema.gql"), 
      introspection : true,
  
      // landing page | aktifkan untuk melihat tampilan 
      // playground : false ,
      // plugins :[ApolloServerPluginLandingPageLocalDefault()], 
    })
    ,BooksModule,
  ],
  controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
