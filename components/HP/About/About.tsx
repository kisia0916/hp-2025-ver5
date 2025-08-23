"use client"
import React, { useEffect, useState, useRef } from 'react'

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (

    <div 
      ref={aboutRef}
      className={`w-full  relative transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
        <div className='w-full flex absolute'>
            <div className='m-auto w-50 h-12 border-1 rounded-full border-gray-800 bg-emerald-400'>
                <div className='flex w-full mt-4'>
                    <span className='style-font-1 text-[32px] m-auto mb-0 text-black leading-[10px]'>About</span>
                </div>
                <div className='flex w-full'>
                    <span className='m-auto main-font mt-[2px] text-[12px]'>輝玉祭とは</span>
                </div>
            </div>
        </div>
            <div className='w-full flex'>
        <div className='mt-7 w-full border-1 rounded-3xl border-gray-800 bg-white'>
            <div className='h-6'>

            </div>

         <div className='w-full flex mt-7'>
             <div className="main-font w-[90%] mx-auto text-center leading-relaxed">
                <p>
                    輝玉祭は攻玉社中学校・高等学校の文化祭です。
                    毎年高校2年生がリーダーシップを取りながら、複数の学年をまたいだ実行委員会を結成し、企画から広報、当日運営までを生徒中心で行います。屋外イベントや模擬店、部活動ごとの出し物などでにぎわい、毎年1万人以上が来校する大きなイベントです。
                </p>
                <p>
                    今年度は9月20日（土）-21日（日）の開催です
                    本校を志望している方も、そうでない方も老若男女大歓迎です！
                    皆様のお越しをお待ちしております。
                </p>
             </div>
         </div>
        <div className='h-6'>

        </div>
        </div>
    </div>
    </div>

  )
}

export default About