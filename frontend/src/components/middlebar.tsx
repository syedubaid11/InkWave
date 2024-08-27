import { BlogDetail } from "./blogdetail"
export const Middlebar=()=>{
    return(
        <>
        <div className="overflow-y-auto h-screen md:ml-48 md:mr-48">
            <BlogDetail/>
        </div>
        </>
    )
}