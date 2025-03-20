import React, { useEffect, useState } from 'react'



function Eyes() {

  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    window.addEventListener("mousemove", ((e) => {
      let cuursorX = e.clientX
      let cuursorY = e.clientY

      let deltaX = cuursorX - (window.innerWidth / 2)
      let deltaY = cuursorY - (window.innerHeight / 2)

      // for angle calculation 
      // coverting radians into degree 
      var angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI)
      setRotate(angle - 180)

    }))
  })
  console.log(rotate)
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] ">
        <div className="absolute flex  gap-10 items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <div className="w-[14vw] h-[14vw] flex items-center justify-center  bg-zinc-100 rounded-full ">
            <div className="w-[60%] h-[60%]  relative  bg-zinc-800  rounded-full">
              <div style={{ transform: ` rotate(${rotate}deg) ` }} className={`line absolute  w-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] `}>
                <div className="w-5 h-5 bg-zinc-100  rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[14vw] h-[14vw] flex items-center justify-center  bg-zinc-100 rounded-full ">
            <div className="w-[60%] h-[60%] relative bg-zinc-800  rounded-full">
              <div style={{ transform: ` rotate(${rotate}deg) ` }} className={`line absolute  w-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] `}>
                <div className="w-5 h-5 bg-zinc-100  rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Eyes

