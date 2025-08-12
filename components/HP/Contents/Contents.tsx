import React from 'react'
import Image from 'next/image'

function Contents() {
  return (
    <div className='w-full mt-30'>
        <div className='w-full flex'>
            <div className='m-auto'>
                <p className='title-subfont text-5xl m-auto text-blue-400'>Contents</p>
                <div className='w-full flex'>
                    <p className='main-font m-auto'>コンテンツ</p>
                </div>
            </div>
        </div>
        <div className='w-[40%] h-[1px] bg-black m-auto rounded-2xl mt-3 mb-3'></div>
        <div className='w-[90%] flex mt-8 justify-around m-auto'>
            <div className=''>
                <Image src="/icon/instagram.svg" width={48} height={48} alt="Instagram" className="m-auto" />
            </div>
            <div className=''>
                <Image src="/icon/x.svg" width={48} height={48} alt="X (Twitter)" />
            </div>
            <div className=''>
                <Image src="/icon/youtube.svg" width={48} height={48} alt="YouTube" />
            </div>
        </div>
        <div className='w-[90%] mt-7 m-auto main-font'>
            <div className='w-full flex'>
                <p className='m-auto'>各種SNSでコンテンツ配信中！</p>
            </div>
            <div className='w-full flex'>
                <p className='m-auto'>ぜひご覧ください</p>
            </div>
        </div>
    </div>
  )
}

export default Contents