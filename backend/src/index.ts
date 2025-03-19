import { Hono } from 'hono'
import { userRouter } from '../routes/user'
import { blogRouter } from '../routes/blog';
import { cors } from 'hono/cors';


const app = new Hono<{Bindings:
    {DATABASE_URL: string,
    JWT_SECRET:string}
}>();

app.use('*',
    cors({
        origin:'*',
        allowHeaders:['GET','POST','PUT'],
        allowMethods:['Content-Type','Authorization'],
        credentials:true
    }))

app.get('/',(c)=>c.text("hello welcome to the backend"))


app.route('/api/v1/user',userRouter)
app.route('/api/v1/blog',blogRouter)
 

export default app
