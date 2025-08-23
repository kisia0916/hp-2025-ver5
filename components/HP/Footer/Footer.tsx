import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className='w-full h-60 bg-[#c8ff46] flex border-1 border-gray-800 z-50  bottom-0 left-0'>
        <div className='w-[90%] m-auto mt-10'>
            <div className='w-full main-font text-black'>
                    <p>第55回輝玉祭</p>
                    <p className='leading-[10px]'>KIGYOKUSAI 2025</p>
            </div>

            <div className='w-full h-[1px] bg-black rounded-2xl mt-5'></div>
            <div className='w-full'>
                                <div className='w-full flex mt-5'>
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
                <p className='main-font text-black text-[10px] mt-3'>©2025 55st kigyokusai mugen created by fumi</p>
            </div>
        </div>
    </div>
  )
}

export default Footer