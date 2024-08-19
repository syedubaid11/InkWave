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


/*
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
                    content:parseBody.content,
                    User: // Add the 'User' property with the required fields
                },
            })
        }
        catch(error){
            return c.text(`${error}`)
        }
    }
    
})
*/

blogRouter.get('/:id',async (c)=>{
    const id=c.req.param('id')
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try{
        const find=await prisma.post.findUnique({
            where:{
                id:id,
            }
        })
        return c.text(`The post is present in the records`)
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
        const bulk=await prisma.user.findMany()
        const bulkjson=JSON.stringify(bulk)
        return c.text(`${bulkjson}`)
    }
    catch(error){
        return c.text(`${error}`)
    }
})