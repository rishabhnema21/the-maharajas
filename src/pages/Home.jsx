import React from 'react'
import Hero from '../components/home/Hero'
import Navigation from '../components/Navigation'
import Intro from '../components/home/Intro'

const Home = () => {
  return (
    <main className='min-h-screen w-full bg-[#070302]'>
        <Navigation/>
        <Hero />
        <Intro />
    </main>
  )
}

export default Home