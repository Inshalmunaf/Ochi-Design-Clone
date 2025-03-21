import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";


function Landingpage() {
    return (
        <div className='w-full h-full bg-[#f1f1f1] pt-1'>

            <div className="textstructure mt-40 px-20 ">
                {["WE CREATE", "EYE OPENING", "PRESENTATION"].map((item, index) => {
            return (<div key={index} className="masker ">
                        <div className="w-fit flex items-end overflow-hidden">
                            {index === 1 && (<div className='mr-[1vw] w-[8vw] h-[5.7vw] rounded-md relative -top-[1.2vw] bg-red-600  '></div>)}
                            <h1 style={{ fontFamily: 'FoundersGrotesk, sans-serif' }} className='pt-[2vw] -mb-[1vw]  uppercase text-[9vw] leading-[.75] text-[#212121] '>{item}</h1>
                        </div>
                    </div>
                    )
                })}
            </div>

            {/* line and 2 elements and a button */}

            <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-4 px-15">
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