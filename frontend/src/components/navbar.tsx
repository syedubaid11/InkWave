export function Navbar(){
    return(
        <div className="flex flex-row justify-between border-2 bg-gray-950 text-amber-300">
            <div className="m-4 text-4xl font-archivo-black p-4">
                Inkwave.
            </div>
        <div className="m-4 p-4">
            <button className="m-3 border p-1.5 rounded-md">Sign Up</button>
            <button className="border p-1.5 rounded-md">Sign In</button>
        </div>
            
        </div>
    )
}