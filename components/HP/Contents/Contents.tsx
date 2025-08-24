"use client"
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function Contents() {
  const [isVisible, setIsVisible] = useState(false);
  const contentsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

    if (contentsRef.current) {
      observer.observe(contentsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (url: string) => {
    if (url) {
      // 外部リンクかどうかを判定
      if (url.startsWith('http://') || url.startsWith('https://')) {
        // 外部リンクの場合は新しいタブで開く
        window.open(url, '_blank', 'noopener,noreferrer');
      } else {
        // 内部リンクの場合はNext.jsのルーターを使用
        router.push(url);
      }
    }
  };

  // 各サービスのデフォルトリンク（propsのlinkが優先される）
  const instagramLink ='https://www.instagram.com/kigyokusai/';
  const xLink = 'https://x.com/kigyokusai';
  const youtubeLink = 'https://www.youtube.com/@kigyokusai';
  return (
    <>

        <div 
      ref={contentsRef}
      className={`w-full relative transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
            <div className='w-full flex'>
                <div className='m-auto w-50 h-12 border-1 rounded-full border-gray-800 bg-blue-400'>
                    <div className='flex w-full mt-4'>
                        <span className='style-font-1 text-[32px] m-auto mb-0 text-black leading-[10px]'>Contents</span>
                    </div>
                    <div className='flex w-full'>
                        <span className='m-auto main-font mt-[2px] text-[12px]'>コンテンツ</span>
                    </div>
                </div>
            </div>
            <div className='w-full flex'>
                <div className='flex m-auto mt-10 px-4 sm:px-0'>
                    <div className='w-28 sm:w-35 h-36 sm:h-45 border-1 border-gray-800 rounded-2xl sm:rounded-3xl bg-white transform rotate-10 relative z-10'>
                        <div className='w-full flex mt-3 sm:mt-5'>
                            <Image
                                src="/icon/Instagram_Glyph_Gradient.svg"
                                alt="Contents Image"
                                width={400}
                                height={400}
                                className='w-14 sm:w-18 m-auto object-cover'/>
                        </div>
                        <div className='w-full flex mt-8 sm:mt-8'>
                            <div 
                                onClick={() => handleClick(instagramLink)}
                                className='m-auto w-[80%] h-6 sm:h-8 rounded-full border-1 border-gray-800 bg-[#c8ff46] flex cursor-pointer hover:bg-[#b8ef36] transition-colors duration-200'
                            >
                                <span className='m-auto main-font text-[12px] sm:text-[16px]'>Go to site</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-28 sm:w-35 h-36 sm:h-45 border-1 border-gray-800 rounded-2xl sm:rounded-3xl bg-white transform -rotate-6 relative z-20 ml-1'>
                        <div className='w-full flex mt-3 sm:mt-6'>
                            <Image
                                src="/icon/logo-black.png"
                                alt="Contents Image"
                                width={400}
                                height={400}
                                className='w-12 sm:w-15 m-auto object-cover'/>
                        </div>
                        <div className='w-full flex mt-9 sm:mt-10'>
                            <div 
                                onClick={() => handleClick(xLink)}
                                className='m-auto w-[80%] h-6 sm:h-8 rounded-full border-1 border-gray-800 bg-[#c8ff46] flex cursor-pointer hover:bg-[#b8ef36] transition-colors duration-200'
                            >
                                <span className='m-auto main-font text-[12px] sm:text-[16px]'>Go to site</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-28 sm:w-35 h-36 sm:h-45 border-1 border-gray-800 rounded-2xl sm:rounded-3xl bg-white transform rotate-5 relative z-30 ml-1'>
                        <div className='w-full flex mt-2 sm:mt-4'>
                            <Image
                                src="/icon/YouTube_23392.png"
                                alt="Contents Image"
                                width={400}
                                height={400}
                                className='w-16 sm:w-20 m-auto object-cover'/>
                        </div>
                        <div className='w-full flex mt-6 sm:mt-7'>
                            <div 
                                onClick={() => handleClick(youtubeLink)}
                                className='m-auto w-[80%] h-6 sm:h-8 rounded-full border-1 border-gray-800 bg-[#c8ff46] flex cursor-pointer hover:bg-[#b8ef36] transition-colors duration-200'
                            >
                                <span className='m-auto main-font text-[12px] sm:text-[16px]'>Go to site</span>
                            </div>
                        </div>
                    {/* </div>
                </div> */}
                            {/* </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Contents