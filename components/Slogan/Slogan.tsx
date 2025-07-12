import React from 'react'

function Slogan() {
  return (
    <div className='w-full mt-30'>
        <div className='w-full flex'>
            <div className='m-auto'>
                <p className='main-font text-5xl m-auto text-pink-400 title-subfont'>Slogan</p>
                <div className='w-full flex'>
                    <p className='main-font m-auto mt-1'>スローガン</p>
                </div>
            </div>
        </div>
        <div className='w-[40%] h-[1px] bg-black m-auto rounded-2xl mt-3 mb-3'></div>
        <div className='w-full'>
            <div className='w-full flex mt-7'>
                <p className='text-7xl main-font m-auto bg-gradient-to-l from-blue-400 via-pink-400 to-amber-400 bg-clip-text text-transparent'>「夢幻」</p>
            </div>
        </div>
        <div className='w-full flex mt-7'>
            <div className="main-font w-[90%] mx-auto text-center leading-relaxed">
            <p className="my-2">今年のスローガンは「夢幻」（むげん）</p>
            <p className="my-2">想像力と情熱で夢のような世界を作り出します</p>
            <p className="my-2 text-amber-400">「こんなことできたらいいな」</p>
            <p className="my-2">そんな思いを形にした企画があふれています</p>
            <p className="my-2">現実をちょっとだけ忘れて、</p>
            <p className="my-2">非日常のひと時をお楽しみください</p>
            </div>
        </div>
    </div>
  )
}

export default Slogan

