"use client"
import Image from 'next/image'
import React from 'react'

function Menu(props: {showFloatingMenu: boolean}) {
    const scrollToSection = (sectionId: string) => {
      const element:any = document.getElementById(sectionId);
      // 要素の位置までスクロール
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      });
    }

  return (
          <div className={`fixed inset-y-0 right-2 w-60 h-75 z-50 transform transition-transform duration-300 ease-in-out border-1 bg-white border-gray-800 rounded-[10px] ${props.showFloatingMenu?"mt-21":"mt-18"}`}>
            <div className='w-full flex'>
            <div className='w-[80%] m-auto grid grid-cols-2 gap-3'>
              <div className='mt-3 cursor-pointer' onClick={() => scrollToSection("top")}>
                <div className='flex'>
                <span className='style-font-1 text-black text-2xl '>Top</span>
                </div>
                <div className='flex'>
                <span className='main-font leading-[1px] text-[12px]'>トップ</span>
              </div>
              </div>
              <div className='mt-3 cursor-pointer' onClick={() => scrollToSection('countdown')}>
                <div className='flex'>
                <span className='style-font-1 text-black text-2xl '>Countdown</span>
                </div>
                <div className='flex'>
                <span className='main-font leading-[1px] text-[12px]'>カウントダウン</span>
              </div>
              </div>
            <div className='mt-3 cursor-pointer' onClick={() => scrollToSection('news')}>
                <div className='flex'>
                <span className='style-font-1 text-black text-2xl '>News</span>
                </div>
                <div className='flex'>
                <span className='main-font leading-[1px] text-[12px]'>ニュース</span>
              </div>
              </div>
            <div className='mt-3 cursor-pointer' onClick={() => scrollToSection('about')}>
              <div className='flex'>
                <span className='style-font-1 text-black text-2xl '>About</span>
                </div>
                <div className='flex'>
                <span className='main-font leading-[1px] text-[12px]'>輝玉祭とは</span>
              </div>
              </div>

            <div className='mt-3 cursor-pointer' onClick={() => scrollToSection('slogan')}>
              <div className='flex'>
                <span className='style-font-1 text-black text-2xl '>Slogan</span>
                </div>
                <div className='flex'>
                <span className='main-font leading-[1px] text-[12px]'>スローガン</span>
              </div>
              </div>

            <div className='mt-3 cursor-pointer' onClick={() => scrollToSection('contents')}>
              <div className='flex'>
                <span className='style-font-1 text-black text-2xl '>Contents</span>
                </div>
                <div className='flex'>
                <span className='main-font leading-[1px] text-[12px]'>コンテンツ</span>
              </div>
              </div>

            <div className='mt-3  cursor-pointer' onClick={() => scrollToSection('access')}>
              <div className='flex'>
                <span className='style-font-1 text-black text-2xl '>Access</span>
                </div>
                <div className='flex'>
                <span className='main-font leading-[1px] text-[12px]'>アクセス</span>
              </div>
              </div>
            </div>
            </div>
            <div className='flex w-full'>
                <div className='w-[85%] m-auto bg-black h-[1px] mt-8 rounded-2xl'>
                <div className='w-full flex mt-2'>
                    <a
                      href="https://x.com/kigyokusai"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X (Twitter) 公式アカウントを開く"
                      className="mr-2 cursor-pointer"
                    >
                      <Image src="/icon/x.svg" width={24} height={24} alt="X (Twitter)" />
                    </a>
                    <a
                      href="https://www.instagram.com/kigyokusai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram 公式アカウントを開く"
                      className="mr-2 cursor-pointer"
                    >
                      <Image src="/icon/instagram.svg" width={24} height={24} alt="Instagram" />
                    </a>
                    <a
                      href="https://www.youtube.com/@kigyokusai"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube 公式チャンネルを開く"
                      className="mr-2 cursor-pointer"
                    >
                      <Image src="/icon/youtube.svg" width={24} height={24} alt="YouTube" />
                    </a>
                </div>
                </div>
            </div>
          </div>
  )
}

export default Menu