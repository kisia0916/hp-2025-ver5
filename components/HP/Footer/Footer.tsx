import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className='h-70 bg-blue-500 flex rounded-t-3xl z-50  bottom-0 left-0 w-screen'>
        <div className='w-[90%] m-auto mt-10'>
            <div className='w-full main-font text-white'>
                    <p>第55回輝玉祭</p>
                    <p className='leading-[10px]'>KIGYOKUSAI 2025</p>
            </div>
            <div className="w-full grid grid-cols-3 gap-4 mt-3 text-white main-font">
                <div>Top</div>
                <div className="">News</div>
                <div className="">Slogan</div>
                <div className="">Contents</div>
                <div className="">Access</div>
            </div>
            <div className='w-full h-[1px] bg-white rounded-2xl mt-5'></div>
            <div className='w-full'>
                <div className='w-full flex mt-5'>
                    <Image src="/icon/x.svg" width={24} height={24} alt="X (Twitter)" className="mr-2" />
                    <Image src="/icon/instagram.svg" width={24} height={24} alt="Instagram" className="mr-2" />
                    <Image src="/icon/youtube.svg" width={24} height={24} alt="YouTube" className="mr-2" />
                </div>
                <p className='main-font text-white text-[10px] mt-3'>©2025 55st kigyokusai mugen created by fumi</p>
            </div>
        </div>
    </div>
  )
}

export default Footer