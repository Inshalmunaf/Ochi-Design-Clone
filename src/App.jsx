import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import LocomotiveScroll from 'locomotive-scroll';
import Featured from './components/Featured'


function App() {
  const scroll = new LocomotiveScroll();

  return (
    <>
      <div className=" w-full min-h-screen text-[#212121] bg-[#f1f1f1]">
        <Navbar/>
        <Landingpage/>
        <Marquee/>
        <About/>
        <Eyes/>
        <Featured/>
      </div>
    </>
  )
}

export default App
