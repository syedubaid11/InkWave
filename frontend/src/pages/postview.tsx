import { useEffect, useState } from "react";
import { useParams} from "react-router-dom"
import axios from 'axios'



export const Postview =()=>{
    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState("");
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const [author,setAuthor]=useState("")

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(`http://localhost:8787/api/v1/blog/blog/get/${id}`);
                setData(response.data); // Fix: Pass the response data to setData
                setTitle(response.data[0].title)
                setContent(response.data[0].content)
                setAuthor(response.data[0].author)
                
            }
            catch(error){
                console.log(error)
            }
           
        };
        fetchData();
    }, []);
    return(
      <>
      <div className="flex flex-col items-center h-full w-full">
        <div className="flex flex-col rounded-lg h-40 w-xl mt-20 w-3/4 bg-gradient-to-r from-amber-200 to-amber-500">
            <div className="m-6 text-5xl font-bold">{title}</div>
            <div className="flex flex-row items-center m-6 text-xl font-light">
                <p className="text-sm mr-4">By </p>
                {author}
            </div>
        </div>
        <div className="mt-10 border-t w-3/5 h-max text-lg">
            <div className="m-5">{content}</div>
        </div>

      </div>
      </>
    )



}