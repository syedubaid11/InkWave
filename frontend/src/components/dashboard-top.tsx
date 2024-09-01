import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";

export function DashboardTop(){
    const navigate=useNavigate();
    
    const [loggedin,setLoggedin]=useState(false)
    const {id}=useParams();
    console.log(id)

    const checkloggedin=()=>{
        const status=localStorage.getItem('status')
        if(status){
            setLoggedin(true)
        }
    }
    useEffect(()=>{
        checkloggedin();
    },[])

    return(
        <>
        
          {!loggedin?
                   (<>
                        <div className="flex justify-end border-black-600">
                            <button onClick={()=>{navigate('/signup')}}className="md:hidden text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700   border border-black rounded-lg m-1 text-sm">Signup</button>
                            <button onClick={()=>{navigate('/sigin')}}className="md:hidden text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700   border border-black rounded-lg p-1 m-1 text-sm">Sign in</button>
                        </div>
                    </>    
                    )
                    :(
                        <div></div>)
                    }
         <div className="m-2 bg-amber-300 rounded-lg">

        <div className="flex flex-row justify-between p-4">
            <div className="flex items-center">
                <p onClick={()=>navigate("/")}className="text-2xl md:text-4xl font-archivo-black cursor-pointer">inkwave.</p>
            </div>  
            <div className="flex items-center">
                
                   {!loggedin?
                   (
                        <div className="flex flex-row">
                            <button onClick={()=>{navigate('/post/anon')}}className="rounded-lg p-2 text-sm md:text-xl">✍️</button>
                            <button onClick={()=>{navigate('/signup')}}className="hidden md:block text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700   border border-black rounded-lg p-1 m-1 text-sm md:text-l">Signup</button>
                            <button onClick={()=>{navigate('/sigin')}}className="hidden md:block text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 border border-black  rounded-lg p-1 m-1 text-sm md:text-l">Sign in</button>
                        </div>
                    )
                    :(
                        <div>
                            <button onClick={()=>{navigate('/post/')}}className="rounded-lg p-2 text-sm md:text-xl">✍️</button>
                        </div>
                        )
                    }
            </div>
            

        </div>
        </div>
        </>
    )
}

