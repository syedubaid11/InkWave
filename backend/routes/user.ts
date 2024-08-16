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
    const body = await c.req.text();
    const parsedBody=await JSON.parse(body)
    console.log(parsedBody)

    const {success}=signupBody.safeParse(parsedBody)
        if(success){
            const prisma=new PrismaClient({
                datasourceUrl:c.env.DATABASE_URL,
            }).$extends(withAccelerate());
            const body=c.req.json()
            try{
                const user=await prisma.user.findUser({
                    where:{
                        email:"syed"
                    }
                })
                return c.text('User Signed up successfully')
            }
            catch(err){
                return c.text(`${err}`);
            }
            
        }
        else{
            return c.text("Invalid details")

        }  
})

userRouter.post('/hello',async (c)=>{
    return c.text("hello this si the endpoint")
})


export default {
    async fetch(req, env) {
        return userRouter.fetch(req, env);
    }
};