export function Image({label,text,height,width}:{label:string,text:string,height:string,width:string}){
    return(
            <div className="flex">
                <div className="flex flex-col">
                    <img style={{ height: height, width: width}} className="outline outline-dotted outline-offset-4 rounded-lg"src={label}></img>
                    <p className="mt-4 flex justify-center text-3xl">{text}</p>
                </div>
            </div>
    )
}