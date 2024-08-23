import { useNavigate } from "react-router-dom"

export function Hero(){
    const navigate=useNavigate()
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="font-archivo-black text-7xl">
                Inkwave.
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-110 text-2xl font-archivo-black mt-3 cursor-pointer"onClick={()=>{navigate("/dashboard")}}>
                write your blog<span>➜</span>
            </div>
        </div>
    )

}