import axios from "axios"
import { useEffect, useState } from "react"


export function DashboardTop(){
    const [data,setData]=useState("")
    

    useEffect(()=>{
        axios.get('http://localhost:8787/api/v1/blog/bulk')
    })
    return(
        <div className="flex flex-row justify-between p-2 m-2 border-b border-slate-900">
            <div className="flex items-center">
                <p className="text-2xl md:text-4xl font-archivo-black">Inkwave</p>
                <input className="h-fit rounded-md ml-4 border-2 w-28 md:ml-8 md:w-fit " type="text" placeholder="Search a blog"></input>
            </div>
            <div className="flex items-center">
                <button className="border-2 rounded-lg p-2 text-sm md:text-xl">✍️</button>
            </div>

        </div>
    )
}