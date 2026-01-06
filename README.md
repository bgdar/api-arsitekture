<p align="center">
    GraphQL arsitekture by Nest.js 
</p>

### Tect Stack 
```bash
# package installasi with yarn
 @nestjs/graphql @nestjs/apollo @apollo/server @as-integrations/express5 graphql

```
### Poin GraphQL  
1.  Default url `/graphql` : post jadi kalau mau ada landing page gunakan `ApolloServerPluginLandingPageLocalDefault` 
1. Akses mengunakankan Resolver di  **1 url sja** yakni : 
    `http://localhost:<port>/graphql`: akan masuk ke Apollo Sandbox (GraphQL Playground). 
2. GraphQL tidak memakai Controller ( REST Api), melainkan Resolver. ( walaupun bisa juga di gunakan bersamaan)
3. **FrontEnd** Cukup fetch ke 1 Api aja yaitu -> `/graphql` 

### test api graphql
> Contoh cara mengetes Api 
1. test dengan metode post
```bash
curl -X POST http://localhost:3000/graphql \
-H "Content-Type: application/json" \
-d '{"query":"{ booksIndo { id booksName } }"}'
```
2. di setiap module ada `controller` yang menghandle Api untuk pengetesan 'GraphQL'

## Route Module 
> Cek di setiap route ini untuk melihat info Api dari arsitekture GraphQL
### books-model
example api GraphQL untuk buku buku 

