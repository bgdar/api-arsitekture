import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class BooksIndo {
  @Field(()=> ID)
  id : number;
  @Field()
  booksName : string;
  @Field()
  author : string;
  @Field()
  tahunTerbit : string; 
  @Field() 
  penerbit : string;
  @Field({nullable : true})
  description? : string;
}
