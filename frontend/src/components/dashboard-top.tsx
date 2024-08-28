import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export function DashboardTop(){
    const navigate=useNavigate();
    const [loggedin,setLoggedin]=useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                   (
                        <div className="flex justify-end border-b border-black-600">
                            <button onClick={()=>{navigate('/signup')}}className="md:hidden border border-black rounded-lg p-1 m-1 text-sm md:text-xl">Signup</button>
                            <button onClick={()=>{navigate('/sigin')}}className="md:hidden border border-black  rounded-lg p-1 m-1 text-sm md:text-xl">Sign in</button>
                        </div>
                    )
                    :(
                        <div></div>)
                    }
        <div className="flex flex-row justify-between p-4 m-2 border-b border-black-600">
            <div className="flex items-center">
                <p className="text-2xl md:text-4xl font-archivo-black">Inkwave.</p>
                <input className="h-fit rounded-md ml-4 border-2 w-28 md:ml-8 md:w-fit " type="text" placeholder="Search a blog"></input>
            </div>  
            <div className="flex items-center">
                <div>
                   <button onClick={()=>{navigate('/post')}}className="border border-black rounded-lg p-2 text-sm md:text-xl">✍️</button>
                </div>
                   {!loggedin?
                   (
                        <div>
                            <button onClick={()=>{navigate('/signup')}}className="hidden md:block border border-black rounded-lg p-1 m-1 text-sm md:text-xl">Signup</button>
                            <button onClick={()=>{navigate('/sigin')}}className="hidden md:block border border-black  rounded-lg p-1 m-1 text-sm md:text-xl">Sign in</button>
                        </div>
                    )
                    :(
                        <div></div>)
                    }
            </div>
            

        </div>
        </>
    )
}

