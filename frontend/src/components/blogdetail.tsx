interface BlogDetailProps{
    title:string,
    author?:string,
    content:string
}
export const BlogDetail:React.FC<BlogDetailProps>=({title,author,content})=>{
    return(
        <>
        <div className="border rounded-lg border-black h-max w-full">
            <div className="flex flex-row justify-between">
                <div className="ml-3 text-xl font-bold">
                    {title}
                </div>
                <div className="mr-3">
                    {author}
                </div>
            </div>
            <div className="m-3">
                {content}                
            </div>
        </div>
        </>
    )
}