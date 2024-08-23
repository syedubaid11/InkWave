import { motion } from "framer-motion"
import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { Footer } from "../components/footer";
import { Image } from "../components/images";
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
            <div className="flex justify-between">
                <div className="ml-40">
                 <Image label={"/images/hiking.png"} text={"Best hiking gear"} />
                </div>
                <div className="mr-20 mt-20">
                 <Image label={"/images/hiking.png"} text={"Best hiking gear"} />
                </div>
            </div>
              <Hero/>
              <div className="flex justify-between">
                <div className="ml-40">
                 <Image label={"/images/hiking.png"} text={"Best hiking gear"} />
                </div>
                <div className="mr-20 mt-20">
                 <Image label={"/images/hiking.png"} text={"Best hiking gear"} />
                </div>
            </div>

        </motion.div>
        </div>      
    )
}