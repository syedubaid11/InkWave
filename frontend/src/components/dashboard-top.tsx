import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export function DashboardTop(){
    const navigate=useNavigate();
    const [data,setData]=useState("")
    const [loggedin,setLoggedin]=useState(false)
    

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
                <div>
                   <button onClick={()=>{navigate('/post')}}className="border-2 rounded-lg p-2 text-sm md:text-xl">✍️</button>
                   {!loggedin?
                   (
                        <div>
                            <button onClick={()=>{navigate('/signup')}}className="border-2 rounded-lg p-1 m-2 text-sm md:text-xl">Signup</button>
                            <button onClick={()=>{navigate('/sigin')}}className="border-2 rounded-lg p-1 m-2 text-sm md:text-xl">Sign in</button>
                        </div>
                    )
                    :(
                        <div>Logged in</div>)
                    }
                </div>
            </div>
            

        </div>
    )
}

