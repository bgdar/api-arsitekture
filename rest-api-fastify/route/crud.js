
export async function handleCrud(fastify){
  fastify.get("/",()=>{
    const data  = {"home":"halaman untuk crud"};
    return JSON.stringify(data)
  })


}




