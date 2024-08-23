export function Image({label,text}:{label:string,text:string}){
    return(
            <div className="flex">
                <div className="flex flex-col">
                    <img className="h-40 outline outline-dotted outline-offset-4 rounded-lg"src={label}></img>
                    <p className="mt-4 flex justify-center">{text}</p>
                </div>
            </div>
    )
}