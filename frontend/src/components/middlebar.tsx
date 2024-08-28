import { BlogDetail } from "./blogdetail"
import { useEffect, useState } from "react"
import axios from 'axios';


export const Middlebar=()=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)

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
        setTimeout(()=>{
            setLoading(false)
        },1500)
    },[])
    const map = data.map((item: { title: string,content:string,author:string }) => {
        return (
            <div className="m-5 ">
                <BlogDetail title={item.title} content={item.content}/> 
            </div>
        )
    })
    return(
        <>
        <div className="overflow-y-auto h-screen md:ml-48 md:mr-48 border-l border-r">
            {loading?(
            <div className="flex flex-row justify-center">
                <div className="flex">Loading... Please wait</div>
                </div>):
                (<div>
                    {map}
                    </div>)}
        </div>
        </>
    )
}