import { Injectable } from '@nestjs/common';
import { BooksIndo } from '../model/books-indo.model';
import { CreateBooksIndo } from '../dto/create-books-indo.input';

@Injectable()
/**
 * daftar Fake untuk IndoBooksService
  */
export class BooksIndoService {
 
  // data in memory cas sebelum database
  private IndoBooks : BooksIndo[] =[
    {id : 1 ,booksName : "list amggur" , author : "jamal" ,tahunTerbit :"2005-05-12",penerbit :"ahmad",description :"ash hasb "},
    {id : 2 ,booksName : "list maaga" , author : "ahmas" ,tahunTerbit :"2005-02-1",penerbit :"ahmad a",description :"ash hasb "},
    
  ]

  // buat user baru
  // return BooksIndo
  create(data : CreateBooksIndo) : BooksIndo{
    const newBooks : BooksIndo = {
      id : this.IndoBooks.length + 1,
      ...data
    }
    this.IndoBooks.push(newBooks)
    return newBooks;
  }

  getAll() : BooksIndo[] {
    return this.IndoBooks
  }

  /**
   * Dapatkan data berdasarkan id 
  */
  findOneById(id : number) :BooksIndo {
    const book = this.IndoBooks.find((u )=> u.id == id);
if (book === undefined) {
    throw new Error(`Buku dengan ID ${id} tidak ditemukan.`);
  }
    return book;
  }
}
