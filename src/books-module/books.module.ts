import { Module } from '@nestjs/common';
import { BooksIndoResolver } from './resolvers/books-indo.resolver';
import { BooksIndoService } from './service/indo-books.service';
import { ControllerController } from './controller/controller.controller';

@Module({
  // ini dengan tujuan untuk menguji Api dari graphsql di controllr
  providers : [BooksIndoResolver,BooksIndoService],
  controllers: [ControllerController],
})
export class BooksModule {}
