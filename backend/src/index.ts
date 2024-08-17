import { Hono } from 'hono'
import { userRouter } from '../routes/user'

const app = new Hono<{Bindings:
    {DATABASE_URL: string,
    JWT_SECRET:string}
}>();


app.route('/api/v1/user',userRouter)
 
app.get('/test',async (c)=>{
    console.log(c.env.DATABASE_URL)
    return c.text("hello")
})
export default app
