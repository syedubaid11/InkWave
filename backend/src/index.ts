import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/signup',(c)=>{
  return c.text("this is the signup route")
})

export default app
