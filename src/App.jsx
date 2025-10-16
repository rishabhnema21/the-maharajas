import React from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Footer from './components/home/Footer'

const App = () => {

  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

  return (
    <>
    <ReactLenis root />
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App