import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



export const Post=()=>{
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const navigate=useNavigate()
    console.log(content)
    console.log(title)

    const publish=async()=>{
        try{
            const response=await axios.post('http://localhost:8787/api/v1/blog/blog/post/543534538',{
                title:title,
                content:content
        })
       return console.log('posted successfully',response)
        }
        catch(error){
           return console.log("Error",error)
        }
    }
    return(
        <>
        
           <div className="flex flex-row justify-between p-4 m-2 border-b border-black-600">
            <div className="flex items-center">
                <p onClick={()=>navigate('/dashboard')}className="text-2xl md:text-4xl font-archivo-black cursor-pointer">inkwave.</p>
            </div>  
            <button onClick={()=>publish()}type="button" className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>
            </div>

            <div className="flex flex-col items-center">
                <div>
                 <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Title..." className="mt-4 w-72 font-bold text-xl md:text-2xl outline-none"></input>
                </div>
                <div>
                    <textarea onChange={(e)=>setContent(e.target.value)} className="mt-4 w-72 p-2.5 text-sm border-t md:w-96 md:text-xl font-light outline-none " placeholder="Write your thoughts here..."></textarea>
                </div>

            </div>
        </>
    )
    
}