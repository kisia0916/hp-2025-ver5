"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='md:hidden w-full'>
          <div className={`h-17 flex justify-between bg-[#fafafa] transition-all duration-300 z-50 mx-auto ${scrolled ? 'w-[92%] fixed top-5 left-0 right-0 shadow-md rounded-[50px] bg-white' : 'w-full'}`}>
              <div className={`flex  ${scrolled ? 'ml-0' : 'ml-3'}`}>
                  <div className='m-auto'>
                      <Image src="/logo/logo4.png" width={32} height={32} alt="Logo" className={`mr-2 ${scrolled?"ml-3":""}`} />
                  </div>
                  <div className='m-auto mr-2 mt-[14px]'>
                      <p className='main-font'>第55回輝玉祭</p>
                      <p className='main-font leading-[10px]'>KIGYOKUSAI</p>
                  </div>
              </div>
              <div className='h-full flex'>
                  <button className={`p-2 flex items-center  text-2xl ${scrolled?"mr-3 rounded-[50px] m-auto":"h-16 w-16"} bg-[#c8ff46] flex`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <line x1="4" y1="6" x2="20" y2="6" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="4" y1="18" x2="20" y2="18" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  </button>
              </div>

          </div>

      </div>
        {/* PC用 */}
    </>
  )
}

export default TopBar