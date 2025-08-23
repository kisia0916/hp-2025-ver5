"use client";
import Image from 'next/image'
import React, { useEffect } from 'react'
import HeroTop from './HeroTop';

function Hero() {
  useEffect(() => {
    // スクロールアニメーション用のCSSを追加
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll-left {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      .scrolling-container {
        display: flex;
        animation: scroll-left 10s linear infinite;
        white-space: nowrap;
      }
      
      .scrolling-text {
        flex-shrink: 0;
        padding-right: 4rem;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);



  return (
    <div  className='w-full relative'>
              <Image
              src="/date.png"
              alt="Hero Image"
              width={600}
              height={600}
              className='w-[150px] object-cover absolute rounded-t-2xl left-1 top-15'
            />
      <div className='w-full'>
        <Image
          src="/hero4.png"
          alt="Hero Image"
          width={2000}
          height={1080}
          className='w-full flex h-150 sm:h-160 object-cover'
        />
        <div className='w-full h-15 bg-[#c8ff46] border-t-1 border-b-1 border-gray-800 flex overflow-hidden items-center'>
          <div className='scrolling-container'>
            <span className='scrolling-text style-font-1 text-6xl'>KIGYOKUSASI2025MUGEN 09.20.SAT-21.SUN</span>
            <span className='scrolling-text style-font-1 text-6xl'>KIGYOKUSASI2025MUGEN 09.20.SAT-21.SUN</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero