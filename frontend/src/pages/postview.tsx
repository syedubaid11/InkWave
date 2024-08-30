import { useEffect, useState } from "react";
import { useParams} from "react-router-dom"
import axios from 'axios'



export const Postview =()=>{
    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`localhost://api/v1/blog/get/:${id}`);
            setData(response.data); // Fix: Pass the response data to setData
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