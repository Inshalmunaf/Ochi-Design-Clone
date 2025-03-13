import React from 'react'
import { motion } from "motion/react"

function Marquee() {
  return (
    <div className='w-full bg-[#004D43] py-[7vw] rounded-t-2xl'>
        <div className="text  pt-10 border-y-1 border-zinc-100 flex whitespace-nowrap overflow-hidden gap-13">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat: Infinity,duration: 10}} style={{fontFamily: 'FoundersGrotesk, sans-serif'}} className='  uppercase text-[25vw] -mt-[8vw] -mb-[14.8vw] select-none'>We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat: Infinity,duration: 10}} style={{fontFamily: 'FoundersGrotesk, sans-serif'}} className='  uppercase text-[25vw] -mt-[8vw] -mb-[14.8vw] select-none'>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee