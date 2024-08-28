import { useNavigate } from "react-router-dom"
import { TruncateText } from "./truncatedtext"
interface BlogDetailProps{
    title:string,
    author?:string,
    content:string
}
export const BlogDetail:React.FC<BlogDetailProps>=({title,author,content})=>{
    const navigate=useNavigate()

    const truncatedtext=TruncateText(content,250)
    
    return(
        <>
        <div className="border-b h-max w-full cursor-pointer" onClick={()=>{navigate('/home')}}>
            <div className="flex flex-row justify-between">
                <div className="ml-3 text-xl font-bold">
                    {title}
                </div>
                <div className="mr-3 text-sm font-light">
                    Anonymous
                </div>
            </div>
            <div className="m-3">
                  {truncatedtext}               
            </div>
        </div>
        </>
    )
}