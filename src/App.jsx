import React from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Footer from './components/home/Footer'
import Navigation from './components/Navigation'
import About from './pages/About'

const App = () => {

  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

  return (
    <div>
      <Navigation />
    <ReactLenis root />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App