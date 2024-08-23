import axios from "axios"
import { useEffect, useState } from "react"


export function DashboardTop(){
    const [data,setData]=useState("")
    

    useEffect(()=>{
        axios.get('http://localhost:8787/api/v1/blog/bulk')
    })
    return(
        <div className="flex flex-row justify-between border-2 p-4 m-4">
        <div className="flex">
            <p className="text-4xl font-archivo-black">Inkwave</p>
            <input className="ml-20" type="text" placeholder="Search a blog"></input>
        </div>

        <div className="flex items-center">
            <button className="border-2">Write a blog</button>
        </div>
        </div>
    )
}