"use client"
import React, { useEffect, useState, useRef } from 'react'

function CountDown() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
  });
  const [isVisible, setIsVisible] = useState(false);
  const countDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = new Date(new Date().getFullYear(), 8, 20, 0, 0, 0); // useEffect内で定義
    
    const update = () => {
      const now = new Date();
      let diff = target.getTime() - now.getTime();

      if (diff < 0) diff = 0;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
      });
    };

    update();
    const timer = setInterval(update, 60000); // 1分ごとに更新

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

    if (countDownRef.current) {
      observer.observe(countDownRef.current);
    }

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, []); // 空の依存配列
    
  return (
    <>

    {/* <div 
      ref={countDownRef}
      className={`w-full mt-16 sm:mt-20 lg:mt-30 relative px-4 transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    > */}
        <div 
      ref={countDownRef}
      className={`w-full relative transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
        <div className='w-full flex'>
            <div className='m-auto w-50 h-12 border-1 rounded-full border-gray-800 bg-orange-400'>
                <div className='flex w-full mt-4'>
                    <span className='style-font-1 text-[32px] m-auto mb-0 text-black leading-[10px]'>COUNT Down</span>
                </div>
                <div className='flex w-full'>
                    <span className='m-auto main-font mt-[2px] text-[12px]'>カウントダウン</span>
                </div>
            </div>
        </div>
        <div className='w-full flex mt-8 sm:mt-8 lg:mt-8'>
            <span className='m-auto main-font text-orange-400 text-xl sm:text-xl lg:text-3xl'>開催まであと</span>
        </div>
        <div className='w-full flex'>
            <div className='m-auto flex mt-4 sm:mt-4 lg:mt-5 flex-wrap justify-center gap-1 sm:gap-2 lg:gap-0'>
                <div className='w-8 h-12 sm:w-10 sm:h-16 lg:w-12 lg:h-20 bg-white border-1 border-gray-800 rounded-2xl lg:rounded-2xl flex items-center justify-center'>
                    <span className='style-font-1 text-[24px] sm:text-[32px] lg:text-[40px] font-bold'>{timeLeft.days[0]}</span>
                </div>
                <div className='w-8 h-12 sm:w-10 sm:h-16 lg:w-12 lg:h-20 bg-white border-1 border-gray-800 rounded-2xl lg:rounded-2xl ml-1 sm:ml-2 flex items-center justify-center'>
                    <span className='style-font-1 text-[24px] sm:text-[32px] lg:text-[40px] font-bold'>{timeLeft.days[1]}</span>
                </div>
                <p className='style-font-1 ml-2 sm:ml-3 text-[20px] sm:text-[24px] lg:text-[30px] mt-6 sm:mt-8 lg:mt-10'>D</p>
                
                <div className='w-8 h-12 sm:w-10 sm:h-16 lg:w-12 lg:h-20 bg-white border-1 border-gray-800 rounded-2xl lg:rounded-2xl ml-2 sm:ml-3 flex items-center justify-center'>
                    <span className='style-font-1 text-[24px] sm:text-[32px] lg:text-[40px] font-bold'>{timeLeft.hours[0]}</span>
                </div>
                <div className='w-8 h-12 sm:w-10 sm:h-16 lg:w-12 lg:h-20 bg-white border-1 border-gray-800 rounded-2xl lg:rounded-2xl ml-1 sm:ml-2 flex items-center justify-center'>
                    <span className='style-font-1 text-[24px] sm:text-[32px] lg:text-[40px] font-bold'>{timeLeft.hours[1]}</span>
                </div>
                <p className='style-font-1 ml-2 sm:ml-3 text-[20px] sm:text-[24px] lg:text-[30px] mt-6 sm:mt-8 lg:mt-10'>H</p>
                
                <div className='w-8 h-12 sm:w-10 sm:h-16 lg:w-12 lg:h-20 bg-white border-1 border-gray-800 rounded-2xl lg:rounded-2xl ml-2 sm:ml-3 flex items-center justify-center'>
                    <span className='style-font-1 text-[24px] sm:text-[32px] lg:text-[40px] font-bold'>{timeLeft.minutes[0]}</span>
                </div>
                <div className='w-8 h-12 sm:w-10 sm:h-16 lg:w-12 lg:h-20 bg-white border-1 border-gray-800 rounded-2xl lg:rounded-2xl ml-1 sm:ml-2 flex items-center justify-center'>
                    <span className='style-font-1 text-[24px] sm:text-[32px] lg:text-[40px] font-bold'>{timeLeft.minutes[1]}</span>
                </div>
                <p className='style-font-1 ml-2 sm:ml-3 text-[20px] sm:text-[24px] lg:text-[30px] mt-6 sm:mt-8 lg:mt-10'>M</p>
            </div>
        </div>
    </div>

    </>
  )
}

export default CountDown