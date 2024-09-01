import { useNavigate } from "react-router-dom"

export function Navbar(){
    const navigate=useNavigate();
    return(
        <div className="flex flex-row justify-between border-b border-slate-900 md:border-none">
            <div className="m-4 text-2xl sm:text-4xl font-archivo-black p-4">
                Inkwave.
            </div>
        <div className="flex flex-wrap justify-center items-center">
            <button onClick={()=>{navigate('/signup')}} className="m-2 outline-dotted font-archivo-black p-1 rounded-md text-sm md:outline-none md:border border-black md:text-base">Sign Up</button>
            <button onClick={()=>{navigate('/signin')}} className="m-2 outline-dotted p-1 font-archivo-black rounded-md text-sm md:outline-none md:border border-black md:text-base">Sign In</button>
        </div>
            
        </div>
    )
}