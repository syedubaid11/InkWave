import {decode,sign,verify} from 'hono/jwt'
import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export const userRouter=new Hono<{Bindings:
    {DATABASE_URL:string;
    JWT_SECRET:string}

}>();

userRouter.post('/signup',async (c)=>{
    try{
        const prisma=new PrismaClient({
        }).$extends(withAccelerate());

    }
    catch(error){
        return c.text(error)
    }
    

})

userRouter.post('/hello',async (c)=>{
    return c.text("hello this si the endpoint")
})


