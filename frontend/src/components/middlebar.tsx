import { BlogDetail } from "./blogdetail"
import { useEffect, useState } from "react"
import axios from 'axios';


export const Middlebar=()=>{
    const [data,setData]=useState([])

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get('http://localhost:8787/api/v1/blog/bulk')
                const data=response.data
                setData(data)
                console.log(data)
               }
               catch(error){
                return console.log('Error in getting the data',error)
               }
        }
        fetchData()
    },[])
    const map=data.map((item)=>{
        return(
            <>
            <BlogDetail title={"Lamb"} content={"Test"}/>
            </>
        )
    })
    return(
        <>
        <div className="overflow-y-auto h-screen md:ml-48 md:mr-48">
            {map}
        </div>
        </>
    )
}