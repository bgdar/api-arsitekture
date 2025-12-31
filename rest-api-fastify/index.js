import fastify from "fastify";
import { handleCrud } from "./route/crud.js";

const PORT = 3005;

const APP = fastify({
  logger: true,
});

APP.get("/", async function (req, server) {
  return JSON.stringify(
    { welcome: "rest api with fastify" 
      , route_info :[
        "/home",
        "/crud"
      ]
    },
    );
});

// -- GRUP Route di 
// route langsung
APP.register(function(app){
  app.get("/",()=>{
    return JSON.stringify({
      "welcome":"welcome to home api"
    })
  })
},{prefix :"/home"})

// route Beda file 
APP.register(handleCrud,{
  prefix :"/crud"
})

await APP.listen({
  port: PORT,
});
