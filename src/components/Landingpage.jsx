import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";


function Landingpage() {
    return (
        <div className='w-full h-full bg-zinc-900 pt-1'>
            <div className="textstructure mt-40 px-20 ">
                {["WE CREATE", "EYE OPENING", "PRESENTATION"].map((item, index) => (
                    <div key={index} className="masker">
                        <div className="w-fit flex items-center">
                        {index===1 && ({})}
                        <h1 style={{ fontFamily: 'FoundersGrotesk, sans-serif' }} className=' flex items-center uppercase h-full text-9xl leading-[6.5vw]  '>{item}</h1>
                        </div>
                        
                    </div>
                ))}
            </div>
            {/* line and 2 elements and a button */}
            <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-4 px-15">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => <p key={index} className='text-md font-light tracking-tight leading-none  '>{item}</p>)}
                <div className="flex justify-center gap-2">
                    <div className="border-[1px] border-zinc-400 rounded-full px-4 py-1 h-8 uppercase font-light text-md leading-none ">Start the project</div>
                    <div className=" w-8 h-8 border-[1px] border-zinc-400 rounded-full flex justify-center items-center">
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong /> 
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage