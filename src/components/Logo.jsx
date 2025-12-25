import { React } from "react"

const Logo = () => {
  return (
    <div className='relative w-36 flex justify-evenly items-center'>
        <img className='w-14 h-14' src="https://ik.imagekit.io/c25vdtqqp/maharajas/logo.png" alt="logo" />
        <div className='logo-text mt-3 leading-none font-[ethnic] text-[#fff]'>
            <h1 className='flex flex-col'>
                <span>the</span>
                <span>Maharajas</span>
            </h1>
        </div>
    </div>
  )
}

export default Logo