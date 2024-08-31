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
                console.log(response.data[0].title)
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
        <div className="flex flex-col items-center">
        <div className="text-2xl">
            {title}
        </div>
        <div>
            {content}
        </div>
        <div>
            {author}
        </div>
        </div>
    )



}