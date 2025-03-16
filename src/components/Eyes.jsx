import React from 'react'

function Eyes() {
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] ">
        <div className="absolute flex  gap-10 items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <div className="w-[14vw] h-[14vw] flex items-center justify-center  bg-zinc-100 rounded-full ">
            <div className="w-[60%] h-[60%]  flex items-center justify-center  bg-zinc-800  rounded-full">
              <div className="line w-full rotate-45">
                <div className="w-5 h-5 flex items-center justify-center  bg-zinc-100  rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[14vw] h-[14vw] flex items-center justify-center  bg-zinc-100 rounded-full ">
            <div className="w-[60%] h-[60%] flex items-center justify-center  bg-zinc-800  rounded-full">
              <div className="line w-full rotate-45">
                <div className="w-5 h-5 flex items-center justify-center  bg-zinc-100  rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Eyes

