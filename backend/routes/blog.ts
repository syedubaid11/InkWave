import { Hono } from "hono";
import {z} from 'zod'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';




export const blogRouter=new Hono<{Bindings:
    {
    DATABASE_URL: string,
    JWT_SECRET: string,
}
}>();

const blogBody=z.object({
    title:z.string(),
    content:z.string()
    .min(20, "Content must be at least 20 characters long")
    .max(5000, "Content cannot exceed 5000 characters"),
})

blogRouter.post('/post',async(c)=>{
    const body=await c.req.text()
    const parseBody=await JSON.parse(body)
    const {success}=blogBody.safeParse(parseBody)

    if(success){
        const prisma=new PrismaClient({
            datasourceUrl:c.env.DATABASE_URL,
        }).$extends(withAccelerate());
        try{
            await prisma.post.create({
                data:{
                    title:parseBody.title,
                    content:parseBody.content
                },
            })
        }
        catch(error){
            return c.text(`${error}`)
        }
    }
    



})
