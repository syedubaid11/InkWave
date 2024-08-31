import { Hono } from "hono";
import {z} from 'zod'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import {decode,sign,verify} from 'hono/jwt'





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
const blogUpdate=z.object({
    title:z.string().nullable(),
    content:z.string().nullable()
})
/*
blogRouter.use('/blog/*',async (c,next)=>{
    const jwt=c.req.header('Authorization')
    if(!jwt){
        return c.text("unauthorised")
    }
    const token=jwt.split(' ')[1]
    const decodedPayload=await verify(token,c.env.JWT_SECRET)
    console.log(decodedPayload)

    await next()
})
*/

blogRouter.post('blog/post/:id',async(c)=>{

    const userid=c.req.param('id')
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
                    id:userid,
                    author:parseBody.author
                },
            })
            return c.text("Blog posted successfully")
        }
        catch(error){
            return c.text(`${error}`)
        }
    }
    
})


blogRouter.get('blog/get/:id',async (c)=>{
    const userId=c.req.param('id')
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try{
        const blog=await prisma.post.findMany({
            where:{
                id:userId, 
            }
        })

        if(blog){
            return c.json(blog)
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

blogRouter.put('blog/:id',async (c)=>{

    const body=await c.req.text()
    const parseBody=await JSON.parse(body)
    const {success}=blogUpdate.safeParse(parseBody)

    const blogid=c.req.param('id')
    console.log(blogid)
    const { title,content }=await c.req.json()

    if(success){
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try{
        const update=await prisma.post.update({
            where:{
                id:blogid
            },
            data:{
                title,content
            },
        })
        const parsedUpdate=JSON.stringify(update)
        return c.text(`Post has been updated ${parsedUpdate}`)
    }
    catch(error){
        return c.text(`error :${error}`)
    }
}
    else{
        return c.text("cannot parse")
    }

})