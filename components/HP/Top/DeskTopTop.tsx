import React from 'react'
import Image from 'next/image'

function DeskTopTop() {
  return (
    <div className='h-screen relative'>
        {/* <div className='mt-[30%] ml-[8%] mr-0 '>
            <p className='text-[#0065F8] main-font text-9xl z-10 relative m-auto responsive-text title-subfont'>KIGYOKUSAI</p>
            <p className='text-white main-font text-9xl responsive-text responsive-text-year z-10 font-bold ml-1 leading-[70px] title-subfont title-text'>
                    2025
            </p>
            <div className='main-font text-8xl mt-5'>
                <div className='flex'>
                  <span className='main-font text-7xl text-pink-400 title-subfont'>09.20.SAT.21.SUN</span>
                </div>
                <div className='flex'>
                  <span className='main-font text-7xl text-blue-400 title-subfont'>AM17:00-10:00</span>
                </div>
            </div>
        </div> */}
        <div className='ml-13'>
          
        </div>
        <div className="hidden xl:block">
          <div className='w-90 h-18 bg-white rounded-[50px] border-1 absolute bottom-25 left-[10%] flex'>
            <div className='w-[90%] m-auto flex justify-around'>
              <div className='w-15 h-15'>
          <div className='w-full flex'>
            <Image src="/icon/instagram.svg" width={40} height={40} alt="Instagram" className="m-auto" />
          </div>
          <div className='w-full flex'>
            <p className='m-auto text-[10px] main-font'>@kigyokusai</p>
          </div>
              </div>
              <div className='w-15 h-15'>
          <div className='w-full flex'>
            <Image src="/icon/youtube.svg" width={40} height={40} alt="YouTube" className="m-auto" />
          </div>
          <div className='w-full flex'>
            <p className='m-auto text-[10px] main-font'>@kigyokusai</p>
          </div>
              </div>
              <div className='w-15 h-15'>
          <div className='w-full flex'>
            <Image src="/icon/x.svg" width={40} height={40} alt="X (Twitter)" className="m-auto" />
          </div>
          <div className='w-full flex'>
            <p className='m-auto text-[10px] main-font'>@kigyokusai</p>
          </div>
              </div>
            </div>
          </div>
        </div>
        <div className='block xl:hidden'>
            <div className='w-18 h-90 bg-white rounded-[50px] border-1 absolute bottom-25 left-[35%] flex'>
              <div className='w-[90%] m-auto'>
                  <div className='w-15 h-15 mb-5'>
                    <div className='w-full flex'>
                      <Image src="/icon/instagram.svg" width={40} height={40} alt="Instagram" className="m-auto" />
                    </div>
                    <div className='w-full flex'>
                      <p className='m-auto text-[8px] main-font'>@kigyokusai</p>
                    </div>
                  </div>
                  <div className='w-15 h-15 mb-5'>
                  <div className='w-full flex'>
                    <Image src="/icon/youtube.svg" width={40} height={40} alt="YouTube" className="m-auto" />
                  </div>
                  <div className='w-full flex'>
                    <p className='m-auto text-[8px] main-font'>@kigyokusai</p>
                  </div>
                      </div>
                      <div className='w-15 h-15 mb-5'>
                  <div className='w-full flex'>
                    <Image src="/icon/x.svg" width={40} height={40} alt="X (Twitter)" className="m-auto" />
                  </div>
                  <div className='w-full flex'>
                    <p className='m-auto text-[8px] main-font'>@kigyokusai</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default DeskTopTop