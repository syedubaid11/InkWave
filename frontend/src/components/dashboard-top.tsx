export function DashboardTop(){
    return(
        <div className="flex flex-row justify-between border-2 p-4 m-4">
        <div className="flex">
            <p className="text-4xl font-archivo-black">Inkwave</p>
            <input className="ml-20" type="text" placeholder="Search a blog"></input>
        </div>

        <div className="flex items-center">
            <button className="">Write a blog</button>
        </div>
        </div>
    )
}