import { Hono } from "hono";
import {z} from 'zod'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { parse } from "dotenv";




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



blogRouter.post('/post/:id',async(c)=>{

    const id=c.req.param('id')
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
                    content:parseBody.content,
                    userId:id,
                },
            })
            return c.text("Blog posted successfully")
        }
        catch(error){
            return c.text(`${error}`)
        }
    }
    
})


blogRouter.get('/get/:id',async (c)=>{
    const userId=c.req.param('id')
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try{
        const blog=await prisma.post.findMany({
            where:{
                userId 
            }
        })

        if(blog){
            const parsedBlog=JSON.stringify(blog)
            return c.text(`The post is present in the records :  ${parsedBlog}`)
        }
        else{
            return c.text("Post not found")
        }
    }
    catch(error){
        return c.text(`${error}`)
    }
})

blogRouter.get('/bulk',async (c)=>{
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try{
        const bulk=await prisma.post.findMany()
        const bulkjson=JSON.stringify(bulk)
        return c.text(`${bulkjson}`)
    }
    catch(error){
        return c.text(`${error}`)
    }
})