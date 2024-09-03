import { BlogDetail } from "./blogdetail"
import { useEffect, useState } from "react"
import axios from 'axios';
import { Skeleton } from "./skeleton";


export const Middlebar=()=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get('http://localhost:8787/api/v1/blog/bulk')
                const data=response.data
                setData(data)
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

    const map = data.map((item: { title: string,content:string,author:string,id:string },index:number) => {
        return (
            
            <div className="m-5" key={index}>
                <BlogDetail title={item.title} content={item.content} id={item.id} author={item.author}/> 
            </div>
        )
    })
    return(
        <>
        <div className="overflow-y-auto h-screen md:ml-48 md:mr-48 border-l border-r">
            {loading?(
            <div className="flex flex-col ml-10 mt-10">
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                </div>):
                (<div>
                    {map}
                    </div>)}
        </div>
        </>
    )
}