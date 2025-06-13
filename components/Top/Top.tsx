import React from 'react'

function Top() {
  return (
    <div className='w-full flex'>
      <div className='m-auto w-[95%]'>
        <div className='w-full flex'>
            <div className='m-auto mt-7 relative flex'>
              <div>
                <p className='text-[#0065F8] main-font text-6xl z-10 relative'>KIGYOKUSAI</p>
                <div className='w-full h-[380px] bg-amber-300 rounded-2xl mt-8 z-0 '>
                    <img src="/photo/pic.png" className='w-full h-full object-cover rounded-2xl relative'/>
                </div>
              </div>
              <p className='text-white main-font text-6xl z-10 absolute font-bold title-text ml-1 leading-12 mt-15'>
                  2025
              </p>
            </div>
        </div>
        <div className='w-full'>
          <div className='w-full flex'>
              <div className='m-auto text-1xl main-font'>
                <p className='main-font text-1xl text-black'>HUDOUMAE.KOUGYOKUSHAGAKUEN</p>
              </div>
          </div>
          <div className='w-full mt-1'>
              <div className='w-full text-4xl main-font flex'>
                <div className='m-auto'>
                  <span className='text-amber-400'>09.20.SAT</span>
                  <span className='text-pink-400'>-21.SUN</span>
                </div>
              </div>
              <div className='w-full text-4xl main-font flex'>
                <div className='m-auto'>
                  <span className='text-blue-400'>AM10:00-17:00</span>
                </div>
              </div>
              <div className='w-full flex'>
                <div className='m-auto mt-8'>
                  <img src="/icon/scroll.svg" className='w-8'/>
                </div>
              </div>
              <div className='w-full text-1xl main-font flex'>
                <div className='m-auto'>
                  <span className='text-black'>SCROLL</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top