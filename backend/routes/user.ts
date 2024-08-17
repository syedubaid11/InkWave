import {decode,sign,verify} from 'hono/jwt'
import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { z } from "zod";
import { parseBody } from 'hono/utils/body';


export const userRouter=new Hono<{Bindings:
    {DATABASE_URL: string,
    JWT_SECRET:string}
}>();

const signupBody=z.object({
    email:z.string(),
    firstName:z.string(),
    lastName:z.string(),
    password:z.string()
})

const signinBody=z.object({
    email:z.string(),
    password:z.string()
})


userRouter.post('/signup',async (c)=>{
    const body = await c.req.text();
    const parsedBody=await JSON.parse(body)
    const {success}=signupBody.safeParse(parsedBody)
        if(success){
            const prisma=new PrismaClient({
                datasourceUrl:c.env.DATABASE_URL,
            }).$extends(withAccelerate());
            try{
                    await prisma.user.create({
                        data:{
                            email:parsedBody.email,
                            password:parsedBody.password,
                            firstName:parsedBody.firstName,
                            lastName:parsedBody.lastName,
                        },
                        
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

userRouter.post('/signin',async (c)=>{
    const body = await c.req.text();
    const parsedBody=await JSON.parse(body)
    const {success}=signinBody.safeParse(parsedBody)

    if(success){
        const prisma=new PrismaClient({
            datasourceUrl:c.env.DATABASE_URL,
        }).$extends(withAccelerate());
        try{
            await prisma.user.findUnique({
                where:{
                    email:parsedBody.email,
                },
            })
            return c.text("User exists")
        }
        catch(error){
            return c.text(`User not found${error}`)
        }
    }
    else{
        return c.text("Did not parse")
    }
    

})


