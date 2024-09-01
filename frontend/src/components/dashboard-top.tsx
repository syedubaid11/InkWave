import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export function DashboardTop(){
    const navigate=useNavigate();
    const {user,isAuthenticated,isLoading}=useAuth0();
    // const checkloggedin=()=>{
    //     const status=localStorage.getItem('status')
    //     if(status){
    //         setLoggedin(true)
    //     }
    // }
    // useEffect(()=>{
    //     checkloggedin();
    // },[])

    return(
        <>
        
          {!isAuthenticated?
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
                   {!isAuthenticated?
                   (
                        <div className="flex flex-row">
                            <button onClick={()=>{navigate('/post/anon')}}className="rounded-lg p-2 text-sm md:text-xl">✍️</button>
                            <button onClick={()=>{navigate('/signup')}}className="hidden md:block text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700   border border-black rounded-lg p-1 m-1 text-sm md:text-l">Signup</button>
                            <button onClick={()=>{navigate('/sigin')}}className="hidden md:block text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 border border-black  rounded-lg p-1 m-1 text-sm md:text-l">Sign in</button>
                        </div>
                    )
                    :(
                        <div className="flex items-center">
                            <button onClick={()=>{navigate(`/post/${id}`)}}className="rounded-lg p-2 text-sm md:text-xl">✍️</button>

                            <div className="flex flex-col items-center ml-5">
                                <img className="h-10 rounded-full"src={user?.picture} alt={user?.name}/>
                                <p className="mt-3">{user?.name}</p>
                            </div>    
                        </div>
                        )
                    }
            </div>
        </div>
        </div>
        </>
    )
}

