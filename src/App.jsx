import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const scroll = new LocomotiveScroll();

  return (
    <>
      <div className=" w-full min-h-screen text-white bg-zinc-900">
        <Navbar/>
        <Landingpage/>
        <Marquee/>
        <About/>
        <Eyes/>
      </div>
    </>
  )
}

export default App
