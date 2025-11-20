import { Module } from '@nestjs/common';
import { BooksIndoResolver } from './resolvers/books-indo.resolver';
import { BooksIndoService } from './service/indo-books.service';

@Module({
  // ini dengan tujuan untuk menguji Api dari graphsql di controllr
  providers : [BooksIndoResolver,BooksIndoService]
})
export class BooksModule {}
