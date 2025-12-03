import React from 'react'
import { useParams } from 'react-router'

const EmpireDetail = () => {

    const { empire } = useParams();

  return (
    <div className="min-h-screen relative pb-24 overflow-hidden text-white bg-gradient-to-bl from-[#0b0707] via-[#0b1b00] to-[#040900]">
        <div className='pt-16'>
          <h1 className='text-start mt-12 md:mt-0 z-10 ml-3 md:ml-24 font-[ethnic] opacity-60 md:opacity-10 text-5xl md:text-7xl'>the <span className='text-8xl md:text-[12rem] text-[#04bf30]'>Mughals</span></h1>
          <img className='mask-l-from-0% mask-b-from-4 z-0 h-[50vh] md:h-[104vh] rotate-12 absolute -top-16 md:-right-16' src="/mughal02.jpg" alt="" />

          <div className='flex flex-col md:flex-row'>
            <img src="/mughaldurbar.jpeg" className='mask-linear-110 mask-linear-from-80% mask-linear-to-80%  w-3/4 md:w-auto mt-12 z-10 md:h-[60vh] ml-12 md:ml-24 md:mt-2' alt="" />
            <div className='ml-5 z-10 md:ml-24 mt-12'>
              <h1 className='text-green-300 text-5xl font-[ethnic]'>Realm of Rising Empire</h1>
              <p className='text-white w-[90vw] md:w-[45vw] text-justify mt-6 mb-6 md:mb-0 md:mt-3'>In this Realm of Rising Empires begins the tale of the Mughals — a dynasty born from the fires of Central Asian lineage and destined to carve its legend upon the Indian subcontinent. Here, the dust of battle met the shine of ambition, and every dawn carried the promise of conquest, culture, and timeless splendor. This was the age when young emperors dreamed beyond borders, when caravan routes whispered tales of power, and when an empire still in its cradle prepared to rise with a majesty the world had seldom seen. The Mughal ascent did not simply happen — it unfolded like a grand epic, written in courage, strategy, and an unshakable vision of destiny.</p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-between'>
            <div className='ml-5 md:ml-22 mt-4'>
              <h1 className='text-green-300 text-5xl mb-5 md:text-end md:ml-60 md:text-7xl font-[ethnic]'>the Great <span className='text-green-700 text-6xl md:text-8xl'>Emperors</span></h1>
              <p className='text-white mt-3'><span className='text-4xl text-green-600'>M</span>ujhse pehli si mohabbat mere mehboob na maang <br />maine samjhaa tha tu hai, to darkshaa hain hayaat <br />tera gham hai, to gham-e-dahar ka jhagdaa kya hai <br />teri aankhon se hain in mausamon ko sabaat <br />teri aankhon ke siwa duniya mein rakhaa kya hai <br />tu jo mil jaaye to taqdeer nigun ho jaaye <br />yu naa tha, maine faqat chaaha tha yu ho jaaye <br />aur bhi gham hain zamaane mein mohabbat ke siwa <br />raahatein aur bhi hain, wasl ki raahat ke siwaa</p>
              
            </div>
            <img src="/mosque.png" className='md:h-[70vh] bg-emerald-800/5 w-3/4 md:w-auto ml-12 mt-12 md:ml-24 rounded-xl md:mr-24 md:mt-2' alt="" />
          </div>
        </div>
    </div>
  )
}

export default EmpireDetail