import { motion } from "framer-motion"
import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { useEffect, useState } from "react";

export function Home(){

    const[isVisible,setVisible]=useState(false)

    useEffect(()=>{
        setVisible(true)
    },[])

    return(
        <div className="h-screen w-screen bg-amber-300">
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Start with opacity 0 and move upwards
            animate={{ opacity: isVisible ? 1 : 0, y: 0 }} // Animate to opacity 1 and move to original position
            transition={{ duration: 0.3 }} // Set duration for the transition
        >
            <Navbar/>
              <Hero/>
        </motion.div>
        </div>      
    )
}