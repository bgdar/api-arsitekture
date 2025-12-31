import { Hono } from "hono";
import CrudeProvider from "../provider/crud.js";


const crudRoute = new Hono();
const crudProvider = new CrudeProvider()

crudRoute.get("/",function(c){
  return c.json({"data ":"asa"})

})

{
  crudRoute.get("/read",(c)=>{
    return c.json({"read " : "is work"})
  })
}

export default crudRoute;
