import React from 'react'

function Featured() {
    return (
        <div className='w-full py-20 '>
            {/* heading */}
            <div className="w-full px-10 border-b-[2px] border-zinc-300 pb-10">
                <h1 className='text-6xl  font-[Neue Montreal] tracking-tighter leading-none'>Featured projects</h1>
            </div>
            {/* cardsContainer --> cards --> heading */}
            <div className="px-10">
                <div className="cards w-full mt-20 flex gap-10 ">

                    <div className="cardscontainer relative w-1/2 h-[75vh] rounded-xl">
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <h1 style={{ fontFamily: 'FoundersGrotesk, sans-serif' }} className='absolute left-full top-[50%] -translate-x-[37%] -translate-y-[50%] z-[9] text-8xl leading-none select-none'>
                                {"FYDE".split("").map((item, index) =>(
                                    <span key={index} >{item}</span>
                                ))}
                            </h1>
                            <img src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
                        </div>
                    </div>
                    <div className="cardscontainer relative w-1/2 h-[75vh] bg-red-400  rounded-xl">
                        <div className="card w-full h-full rounded-xl overflow-hidden  ">
                            <h1 style={{ fontFamily: 'FoundersGrotesk, sans-serif' }} className='absolute right-full top-[50%] translate-x-[37%] -translate-y-[50%] z-[9] text-8xl leading-none select-none'>
                                {"VISE".split("").map((item, index) =>(
                                    <span key={index} >{item}</span>
                                ))}
                            </h1>
                            <img src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Featured