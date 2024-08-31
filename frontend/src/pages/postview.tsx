import { useEffect, useState } from "react";
import { useParams} from "react-router-dom"
import axios from 'axios'



export const Postview =()=>{
    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(`http://localhost:8787/api/v1/blog/blog/get/${id}`);
                setData(response.data); // Fix: Pass the response data to setData
            }
            catch(error){
                console.log(error)
            }
           
        };
        fetchData();
    }, []);
    return(
        <>
        <div className="text-2xl">
            {data}
        </div>
        </>
    )



}