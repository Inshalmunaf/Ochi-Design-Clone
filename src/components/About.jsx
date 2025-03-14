import React from 'react'

function About() {
  return (
    <>
      <div className='w-full p-[7vw] bg-[#CDEA68] rounded-t-3xl'>
        <h1 style={{ fontFamily: 'NeueMontreal, sans-serif' }} className='text-black text-[3.8vw] leading-[4.5vw] tracking-tigth '>
          Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>

        <div className=" flex gap-5 w-full border-[#a1b562] mt-[4vw] pt-[1vw] border-t-[2px]">

          <div className="w-[50vw]">
            <h1 className='text-[4vw] text-black'>Our approach:</h1>
            <button className=' flex  items-center gap-5 mt-[1vw] px-[2vw] py-[1vw] rounded-full uppercase bg-zinc-800'>Read more
              <div className="w-[.5vw] h-[1vh] rounded-full bg-zinc-100 "></div>
            </button>
          </div>

          <div className="w-[50vw] h-[70vh] bg-[#a1b562] rounded-3xl"></div>

        </div>
      </div>
    </>
  )
}

export default About