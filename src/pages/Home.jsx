import React from 'react'
import Hero from '../components/home/Hero'
import Navigation from '../components/Navigation'

const Home = () => {
  return (
    <main className='min-h-screen w-screen bg-[#070302]'>
        <Navigation/>
        <Hero />
    </main>
  )
}

export default Home