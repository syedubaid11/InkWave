import {decode,sign,verify} from 'hono/jwt'
import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { env } from 'hono/adapter';
import { z } from "zod";


export const userRouter=new Hono<{Bindings:
    {DATABASE_URL:string;
    JWT_SECRET:string}

}>();

const signupBody=z.object({
    email:z.string(),
    firstName:z.string(),
    lastName:z.string(),
    password:z.string()
})

userRouter.post('/signup',async (c)=>{
       const requestBody=await c.req.text;
       const {success}=signupBody.safeParse(c.body)
        if(success){
            const prisma=new PrismaClient({
                datasourceUrl:c.env.DATABASE_URL,
            }).$extends(withAccelerate());
            const body=c.req.json()
            try{
                const user=await prisma.user.findUnique({
                    where:{
                        email:body.email
                    }
                })
            }
            catch(err){
                return c.text(`${err}`);
            }
            
        }
        else{
            return c.text(`The incoming details are : ${requestBody}`)
            return c.text("Invalid details")

        }

        

        
})

userRouter.post('/hello',async (c)=>{
    return c.text("hello this si the endpoint")
})


