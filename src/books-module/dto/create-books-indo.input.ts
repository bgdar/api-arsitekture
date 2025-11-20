import { InputType,Field  } from "@nestjs/graphql";


@InputType()
export class CreateBooksIndo {
 
  @Field()
  booksName : string;
  @Field()
  author : string;
  @Field()
  tahunTerbit : string; 
  @Field() 
  penerbit : string;
  @Field({nullable : true})
  description : string;
  
}
