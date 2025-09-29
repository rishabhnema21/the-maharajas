import React from 'react'

const Badge = () => {
  const text = "वीर भोग्या वसुंधरा • ";
  const repeatedText = text.repeat(3); // Repeat to ensure complete circle
  
  return (
    <>
      {/* Google Font Import for Devanagari */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700&display=swap" 
        rel="stylesheet" 
      />
      
      <div className="relative w-24 h-24 md:h-32 md:w-32 flex items-center justify-center">
      {/* Rotating circular text */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            />
          </defs>
          <text 
            className="fill-current text-white" 
            style={{ 
              fontSize: '19px', 
              letterSpacing: '2px',
              fontFamily: 'Noto Sans Devanagari, sans-serif',
              fontWeight: '600'
            }}
          >
            <textPath href="#circlePath" startOffset="0%">
              {repeatedText}
            </textPath>
          </text>
        </svg>
      </div>
      
      {/* Center decorative element */}
      {/* <div className="relative z-10 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center border-4 border-amber-200 shadow-lg"> */}
        <div className="w-9 h-9 bg-amber-600 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className='text-amber-950 text-center' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          </div>
        </div>
      {/* </div> */}
      
      {/* Outer decorative ring */}
      {/* <div className="absolute inset-0 border-2 border-amber-100 rounded-full opacity-30"></div> */}
    </div>
    </>
  )
}

export default Badge