export function Image({label,text,height,width}:{label:string,text:string,height:string,width:string}){
    return(
            <div className="flex">
                <div className="flex flex-col">
                    <img style={{ height: height, width: width}} className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer outline outline-dotted outline-offset-4 rounded-lg"src={label}></img>
                    <p className="mt-4 flex justify-center text-md">{text}</p>
                </div>
            </div>
    )
}