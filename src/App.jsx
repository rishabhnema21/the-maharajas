import React from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Footer from './components/home/Footer'
import Navigation from './components/Navigation'
import About from './pages/About'
import Empires from './pages/Empires'
import EmpireDetail from './pages/EmpireDetail'
import Legacy from './pages/Legacy'

const App = () => {

  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

  return (
    <div className='selection:bg-red-600/50'>
      <Navigation />
    <ReactLenis root />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/empires' element={<Empires />}/>
      <Route path='/empires/:empire' element={<EmpireDetail />} />
      <Route path='/legacy' element={<Legacy />} />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App