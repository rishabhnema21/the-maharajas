import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen relative bg-[#0b0707]'>
        <div className='w-screen  h-[60vh]'>
            <img className='object-cover mask-l-from-80% mask-r-from-80% mask-b-from-10% object-bottom w-full h-full' src="https://i.pinimg.com/1200x/17/1d/6f/171d6f1f7d35153d05136f411389dc02.jpg" alt="" />
        </div>

        <div className='absolute top-[40vh]'>
            <h1 className='text-white ml-12 font-medium text-6xl font-[ethnic]'>the <span className="bg-gradient-to-tl from-[#f48080] to-red-900 bg-clip-text text-transparent">Legacy</span> Unfolds</h1>
        </div>

    </div>
  )
}

export default About