import {decode,sign,verify} from 'hono/jwt'
import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

export const userRouter=new Hono<{Bindings:
    {DATABASE_URL:string;
    JWT_SECRET:string}

}>();

userRouter.post('/api/v1/signup',async (c)=>{
    const prisma=await new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());

    if(prisma){
        return c.text 
    }


})


