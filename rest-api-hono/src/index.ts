import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import crudRoute from './route/crud.js';

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    "/crud" :"page for crete , delete , update , read"
  })
})

app.route("/crud",crudRoute)


serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
