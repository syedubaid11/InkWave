export function Navbar(){
    return(
        <div className="flex flex-row justify-between">
            <div className="m-4 text-4xl font-archivo-black p-4">
                Inkwave.
            </div>
        <div className="m-4 p-4">
            <button className="m-3 border border-black font-archivo-black p-1.5 rounded-md ">Sign Up</button>
            <button className="border border-black p-1.5 font-archivo-black rounded-md">Sign In</button>
        </div>
            
        </div>
    )
}