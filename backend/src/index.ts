import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/signup',(c)=>{
  return c.text("this is the signup route")
})

app.post('/api/v1/sigin',async (c)=>{
  const {username,passowrd}=await c.req.json();
  
})


export default app
