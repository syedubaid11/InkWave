interface BlogDetailProps{
    title:string,
    author?:string,
    content:string
}
export const BlogDetail:React.FC<BlogDetailProps>=({title,author,content})=>{
    return(
        <>
        <div className="border-2 h-12 w-full">
            <div className="flex flex-row justify-between">
                <div className="ml-3">
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