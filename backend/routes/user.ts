import {decode,sign,verify} from 'hono/jwt'
import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { env } from 'hono/adapter';

export const userRouter=new Hono<{Bindings:
    {DATABASE_URL:string;
    JWT_SECRET:string}

}>();

userRouter.post('/signup',async (c)=>{
        const prisma=new PrismaClient({
            datasourceUrl:c.env.DATABASE_URL,
        }).$extends(withAccelerate());
        const body=c.req.json()
        
        const user=await prisma.user.findUnique({
            where:{
                email:body.email
            }

        })

        
})

userRouter.post('/hello',async (c)=>{
    return c.text("hello this si the endpoint")
})


