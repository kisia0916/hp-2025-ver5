"use client"
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react';
import GoodsCard from '@/components/Goods/GoodsCard';
import Link from 'next/link';

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
        threshold: 0 // 10%が見えた時にトリガー
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
  const kurumiLink = 'https://kurumi.kigyokusai.com';
  const goodsLink = 'https://kigyokusai.com/goods';
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
              <div className='w-full'>
                <div className='w-full flex'>
                  <div className='flex mt-10 px-4 sm:px-0 m-auto'>
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
                          </
                          div> */}
                      </div>
                  </div>
                  </div>
                <div className='w-full m-auto mt-20'>
                  <div className='w-full flex'>
                    <span className='main-font text-2xl m-auto text-blue-400'>ゲスト</span>
                  </div>
                  <div className='w-full flex mt-8'>
                      <Image
                          src="/contents/guest.jpg"
                          alt="Contents Image"
                          width={400}
                          height={400}
                          className='w-[80%]  m-auto object-cover rounded-2xl'/>
                  </div>
                  <div className="w-full flex mt-5 ">
                    <p className="main-font text-[18px] m-auto text-center break-words">
                      講演会のチケットは9月20日10:00から<Link className='text-blue-400' href={"https://kurumi.kigyokusai.com/map/project/77ecaafb-1093-43c0-b624-f907c2fcb9b4?floor=2835e951-8d64-482a-91e1-3a1a49e3fe4d"}>一号館１階受付</Link>にて先着順で配布します！
                    </p>
                  </div>

                  <div className='w-full flex mt-12'>
                    <span className='main-font text-2xl m-auto text-blue-400'>デジタルパンフレット</span>
                  </div>
                  <div className='w-full flex mt-8'>
                              <Image
                                  src="/contents/kurumi-for-web.png"
                                  alt="Contents Image"
                                  width={400}
                                  height={400}
                                  className='w-[80%]  m-auto object-cover rounded-2xl'/>
                  </div>
                
                    <div className="w-full flex mt-5 ">
                    <p className="main-font text-[18px] m-auto text-center break-words">
                      輝玉祭ではお使いのブラウザから企画マップや食品販売状況が確認できるのデジタルパンフレットがご利用いただけます。
                    </p>
                  </div>
                  <div className='w-full flex mt-6'>
                            <div 
                                onClick={() => handleClick(kurumiLink)}
                                className='m-auto w-[60%]  h-13 sm:h-13 rounded-full border-1 border-gray-800 bg-[#c8ff46] flex cursor-pointer hover:bg-[#b8ef36] transition-colors duration-200'
                            >
                              <div className='flex m-auto'>
                                  <span className='main-font text-[16px] sm:text-[16px]'>今すぐ使う！</span>
                                  <ArrowUpRight />
                              </div>
                            </div>
                  </div>

                <div className='w-full m-auto mt-20'>
                  <div className='w-full flex'>
                    <span className='main-font text-3xl m-auto text-blue-400'>Goods</span>
                  </div>
                  {/*グッズリスト*/}
                    <div
                      className="grid grid-cols-2 gap-5 sm:gap-8 m-auto mt-10 relative"
                      style={{
                        // 上は不透明(1)、下に向かって透明(0)へ
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0))',
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0))',
                      } as React.CSSProperties}
                    >
                    <GoodsCard img="akuki-.png" title="アクリルキーホルダー" value={600}/>
                    <GoodsCard img="blue_pen.png" title="シャーペン (blue)" value={700}/>
                    <GoodsCard img="pen.png" title="シャーペン(pink)" value={700}/>
                    <GoodsCard img="pen.png" title="シャーペン(pink)" value={700}/>
                  </div>

                  <div className='w-full flex '>
                            <div 
                                onClick={() => handleClick(goodsLink)}
                                className='m-auto w-[60%]  h-13 sm:h-13 rounded-full border-1 border-gray-800 bg-[#c8ff46] flex cursor-pointer hover:bg-[#b8ef36] transition-colors duration-200'
                            >
                              <div className='flex m-auto'>
                                  <span className='main-font text-[16px] sm:text-[16px]'>もっと見る</span>
                                  <ArrowUpRight />
                              </div>
                            </div>
                  </div>
                </div>

                </div>
                </div>
            </div>

        </div>

    </>
  )
}

export default Contents