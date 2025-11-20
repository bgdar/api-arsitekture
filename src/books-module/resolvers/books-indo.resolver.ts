import { Resolver ,Query, Mutation, Args, Int} from "@nestjs/graphql";
import { BooksIndo } from "../model/books-indo.model";
import { CreateBooksIndo } from "../dto/create-books-indo.input";
import { BooksIndoService } from "../service/indo-books.service";


@Resolver(()=> BooksIndo)
export class BooksIndoResolver {

  constructor(
    private booksIndoService : BooksIndoService,
  ){

  }

  @Query(() => [BooksIndo], {name :"booksIndo"})
  getBooksIndo() :BooksIndo[]{
    return this.booksIndoService.getAll();
  }

  @Query(()=> BooksIndo , {name :"bookIndo"})
  async getOneBooksIndo(@Args('id',{type : ()=> Int}) id : number) :Promise<BooksIndo> {
    return this.booksIndoService.findOneById(id) ;
  }

  // MUTATION 
  @Mutation(()=> BooksIndo , {name : "createBooksIndo"})
  async createBooksIndo(@Args('createBooksIndoInput') input : CreateBooksIndo) : Promise<BooksIndo>{
    return this.booksIndoService.create(input);

  }
    
}
