"use client"
import React, { useEffect, useState, useRef } from 'react'
import NewsContent from './NewsContent/NewsContent'

function News() {
  const [isVisible, setIsVisible] = useState(false);
  const newsRef = useRef<HTMLDivElement>(null);

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

    if (newsRef.current) {
      observer.observe(newsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
        <>

    <div 
      ref={newsRef}
      className={`w-full relative transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
        <div className='w-full flex absolute'>
            <div className='m-auto w-50 h-12 border-1 rounded-full border-gray-800 bg-amber-400'>
                <div className='flex w-full mt-4'>
                    <span className='style-font-1 text-[32px] m-auto mb-0 text-black leading-[10px]'>News</span>
                </div>
                <div className='flex w-full'>
                    <span className='m-auto main-font mt-[2px] text-[12px]'>ニュース</span>
                </div>
            </div>
        </div>
        
        <div className='w-full flex'>
            <div className='mt-7 w-full border-1 rounded-3xl border-gray-800 bg-white'>
                <div className='h-6'>

                </div>
                <NewsContent date='2025.09.17' link='https://kurumi.kigyokusai.com' is_bottom={false} title='デジタルパンフレットを公開しました！'/>
                <NewsContent date='2025.08.22' link='https://kigyokusai.com' is_bottom={false} title='ホームページを公開しました！'/>
                <NewsContent date='2025.08.19' link='https://www.instagram.com/p/DNfQWJpTfY0/?hl=ja' is_bottom={true} title='カウントダウンを開始しました！'/>
                {/* <NewsContent date='2025.06.12' link='https://x.com/kigyokusai' is_bottom={true} title='SNS投稿が始まりました！'/> */}
                <div className='h-7'>

                </div>
            </div>
        </div>
    </div>

        </>
  )
}

export default News