export function Navbar(){
    return(
        <div className="flex flex-row justify-between ">
            <div className="m-4 text-2xl sm:text-4xl font-archivo-black p-4">
                Inkwave.
            </div>
        <div className="flex flex-wrap justify-center items-center">
            <button className="m-2 border border-black font-archivo-black p-1 rounded-md">Sign Up</button>
            <button className="m-2 border border-black p-1 font-archivo-black rounded-md ">Sign In</button>
        </div>
            
        </div>
    )
}