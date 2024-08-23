export function Navbar(){
    return(
        <div className="flex flex-row justify-between border-b border-slate-900 md:border-none">
            <div className="m-4 text-2xl sm:text-4xl font-archivo-black p-4">
                Inkwave.
            </div>
        <div className="flex flex-wrap justify-center items-center">
            <button className="m-2 border border-black font-archivo-black p-1 rounded-md text-sm md:text-base">Sign Up</button>
            <button className="m-2 border border-black p-1 font-archivo-black rounded-md text-sm md:text-base">Sign In</button>
        </div>
            
        </div>
    )
}