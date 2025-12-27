import { Suspense, lazy, useEffect, useState } from "react"
import { Routes, Route, useLocation } from "react-router"
import { ReactLenis, useLenis } from "lenis/react"
import { AnimatePresence } from "framer-motion"

import Navigation from "./components/Navigation"
import Footer from "./components/home/Footer"
import Loader from "./components/Loader"
import ScrollToTop from "./components/ScrollToTop"

// Lazy pages
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Empires = lazy(() => import("./pages/Empires"))
const EmpireDetail = lazy(() => import("./pages/EmpireDetail"))
const Legacy = lazy(() => import("./pages/Legacy"))

const App = () => {
  const location = useLocation()
  const [showLoader, setShowLoader] = useState(true)

  useLenis(() => {})

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="selection:bg-red-600/50 bg-black">
      <Navigation />

      <ReactLenis root options={{ smoothWheel: true, lerp: 0.08 }}>
        <ScrollToTop />
        <AnimatePresence>
          {showLoader && <Loader />}
        </AnimatePresence>


        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/empires" element={<Empires />} />
              <Route path="/empires/:empire" element={<EmpireDetail />} />
              <Route path="/legacy" element={<Legacy />} />
            </Routes>
          </AnimatePresence>
        </Suspense>

        <Footer />
      </ReactLenis>
    </div>
  )
}

export default App
