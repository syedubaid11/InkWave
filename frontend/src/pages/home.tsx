import { motion } from "framer-motion"
import { Navbar } from "../components/navbar";
import { useEffect, useState } from "react";

export function Home(){

    const[isVisible,setVisible]=useState(false)

    useEffect(()=>{
        setVisible(true)
    },[])

    return(
        <>
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Start with opacity 0 and move upwards
            animate={{ opacity: isVisible ? 1 : 0, y: 0 }} // Animate to opacity 1 and move to original position
            transition={{ duration: 1 }} // Set duration for the transition
        >
        <div className="h-screen w-screen bg-amber-300">
            <Navbar/>
        </div>
        </motion.div>
        </>      
    )
}