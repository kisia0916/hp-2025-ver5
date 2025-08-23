"use client"
import React, { useEffect, useState, useRef } from 'react'

function Slogan() {
  const [isVisible, setIsVisible] = useState(false);
  const sloganRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 1 // 10%が見えた時にトリガー
      }
    );

    if (sloganRef.current) {
      observer.observe(sloganRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (


    <div 
      ref={sloganRef}
      className={`w-full  relative transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
        <div className='w-full flex absolute'>
            <div className='m-auto w-50 h-12 border-1 rounded-full border-gray-800 bg-pink-400'>
                <div className='flex w-full mt-4'>
                    <span className='style-font-1 text-[32px] m-auto mb-0 text-black leading-[10px]'>Slogan</span>
                </div>
                <div className='flex w-full'>
                    <span className='m-auto main-font mt-[2px] text-[12px] text-black'>スローガン</span>
                </div>
            </div>
        </div>
            <div className='w-full flex'>
        <div className='mt-7 w-full border-1 rounded-3xl border-gray-800 bg-white'>
            <div className='h-6'>

            </div>
         <div className='w-full'>
             <div className='w-full flex mt-7'>
                 <p className='text-7xl main-font m-auto bg-gradient-to-l from-blue-400 via-pink-400 to-amber-400 bg-clip-text text-transparent'>「夢幻」</p>
             </div>
         </div>
         <div className='w-full flex mt-7'>
             <div className="main-font w-[90%] mx-auto text-center leading-relaxed">
             <p className="my-2">今年のスローガンは「夢幻」（むげん）</p>
             <p className="my-2">想像力と情熱で夢のような世界を作り出します</p>
             <p className="my-2 text-amber-400">「こんなことできたらいいな」</p>
             <p className="my-2">そんな思いを形にした企画があふれています</p>
             <p className="my-2">現実をちょっとだけ忘れて、</p>
             <p className="my-2">非日常のひと時をお楽しみください</p>
             </div>
         </div>
        <div className='h-6'>

        </div>
        </div>
    </div>
    </div>

  )
}

export default Slogan

