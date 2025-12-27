import { motion } from "framer-motion"
import React from "react"

const Loader = () => {
  return (
    <motion.div className="min-h-screen flex items-center justify-center bg-black text-white"
    initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-[ethnic] tracking-wider">
          Echoes of Empire
        </h1>

        <div className="w-40 h-[2px] bg-white/20 overflow-hidden mx-auto">
          <div className="w-1/3 h-full bg-white animate-pulse" />
        </div>

        <p className="text-sm text-white/60 tracking-wide">
          Preserving history...
        </p>
      </div>
    </motion.div>
  )
}

export default Loader
