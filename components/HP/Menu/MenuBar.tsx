import React from 'react'

function MenuBar() {
  return (
    <div className='m-auto main-font w-full flex mt-[20%] main-font '>
        <div className='m-auto ml-15'>
            {/* <div className='w-full flex'>
                <div className='m-auto ml-3 w-30 h-30 bg-blue-400 rounded-[50%] flex'>
                    <p className='main-font text-2xl m-auto text-white'>Menu</p>
                </div>
            </div> */}
            <div className='hidden xl:flex main-font text-5xl w-100 mt-12'>
                <div className='w-full m-auto ml-8'>
                    <div className='w-full mt-7'>
                        <p className='text-amber-400 m-auto ml-0 title-subfont'>News</p>
                        <p className='text-black main-font text-[15px] ml-1'>ニュース</p>
                    </div>
                    <div className='w-full mt-7'>
                        <p className='text-pink-400 m-auto ml-0 title-subfont'>Slogan</p>
                        <p className='text-black main-font text-[15px] ml-1 mt-1'>スローガン</p>
                    </div>
                    <div className='w-full mt-7'>
                        <p className='text-blue-400 m-auto ml-0 title-subfont'>Contents</p>
                        <p className='text-black main-font text-[15px] ml-1'>コンテンツ</p>
                    </div>
                    <div className='w-full mt-7'>
                        <p className='text-amber-400 m-auto ml-0 title-subfont'>Access</p>
                        <p className='text-black main-font text-[15px] ml-1'>アクセス</p>
                    </div>
                </div>
            </div>
            <div className="flex xl:hidden main-font text-3xl w-full mt-8 justify-center">
                <div>
                    <div className='w-full mt-5'>
                        <p className='text-amber-400 title-subfont'>News</p>
                        <p className='text-black main-font text-[13px] ml-1'>ニュース</p>
                    </div>
                    <div className='w-full mt-5'>
                        <p className='text-pink-400 title-subfont'>Slogan</p>
                        <p className='text-black main-font text-[13px] ml-1 mt-1'>スローガン</p>
                    </div>
                    <div className='w-full mt-5'>
                        <p className='text-blue-400 title-subfont'>Contents</p>
                        <p className='text-black main-font text-[13px] ml-1'>コンテンツ</p>
                    </div>
                    <div className='w-full mt-5'>
                        <p className='text-amber-400 title-subfont'>Access</p>
                        <p className='text-black main-font text-[13px] ml-1'>アクセス</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuBar