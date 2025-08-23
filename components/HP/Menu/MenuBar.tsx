"use client";
import React from 'react'

function MenuBar() {
        const scrollToSection = (sectionId: string) => {
            const container = document.getElementById('mainScroll') as HTMLDivElement | null;
            const target = document.getElementById(sectionId);
            if (!container || !target) {
                console.warn(`Scroll target not found. container: ${!!container}, target(${sectionId}): ${!!target}`);
                return;
            }
            const containerRect = container.getBoundingClientRect();
            const targetRect = target.getBoundingClientRect();
            const offsetTop = targetRect.top - containerRect.top + container.scrollTop;
            container.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    const style = `
                                relative inline-block transition-colors duration-500
                                before:content-[''] before:absolute before:left-0 before:top-0
                                before:w-full before:h-full before:bg-[#c8ff46]
                                before:origin-right before:scale-x-0
                                before:transition-transform before:duration-500
                                before:-z-10
                                hover:text-black
                                hover:before:scale-x-100 hover:before:origin-left
                                m-auto ml-0 style-font-1
                                bg-transparent border-none p-0 text-left
    `

  return (
    <div className='m-auto main-font w-full flex mt-[10%] sm:mt-[15%] lg:mt-[20%]'>
        <div className='m-auto ml-4 sm:ml-8 lg:ml-15 w-full max-w-md lg:max-w-none'>
            <a  className='text-2xl sm:text-3xl lg:text-4xl text-gray-800 m-auto ml-2 sm:ml-3 lg:ml-5 style-font-1'>MENU</a>

            <div className='hidden md:flex main-font text-2xl sm:text-3xl lg:text-4xl w-full max-w-xs sm:max-w-sm lg:w-100 mt-3 ml-2 sm:ml-3 lg:ml-5'>
                <div className='w-full flex'>
                    <div className='w-[2px] sm:w-[3px] bg-[#c8ff46]'>

                    </div>
                    <div className='w-full m-auto text-black ml-2 sm:ml-3'>
                        <div className='w-full'>
                            <button onClick={() => scrollToSection('countdown2')} className={`m-auto ml-0 style-font-1 cursor-pointer ${style}`}>COUNT DOWN</button>
                            <p className='text-black main-font text-[12px] sm:text-[13px] lg:text-[15px] ml-1'>カウントダウン</p>
                        </div>
                        <div className='w-full mt-4 sm:mt-5 lg:mt-6'>
                            <button onClick={() => scrollToSection('news2')} className={`m-auto ml-0 style-font-1 cursor-pointer ${style}`}>News</button>
                            <p className='text-black main-font text-[12px] sm:text-[13px] lg:text-[15px] ml-1'>ニュース</p>
                        </div>
                        <div className='w-full mt-4 sm:mt-5 lg:mt-6'>
                            <button onClick={() => scrollToSection('about2')} className={`m-auto ml-0 style-font-1 cursor-pointer ${style}`}>About</button>
                            <p className='text-black main-font text-[12px] sm:text-[13px] lg:text-[15px] ml-1'>輝玉祭について</p>
                        </div>
                        <div className='w-full mt-4 sm:mt-5 lg:mt-6'>
                            <button onClick={() => scrollToSection('slogan2')} className={`m-auto ml-0 style-font-1 cursor-pointer ${style}`}>Slogan</button>
                            <p className='text-black main-font text-[12px] sm:text-[13px] lg:text-[15px] ml-1 mt-1'>スローガン</p>
                        </div>
                        <div className='w-full mt-4 sm:mt-5 lg:mt-6'>
                            <button onClick={() => scrollToSection('contents2')} className={`m-auto ml-0 style-font-1 cursor-pointer ${style}`}>Contents</button>
                            <p className='text-black main-font text-[12px] sm:text-[13px] lg:text-[15px] ml-1'>コンテンツ</p>
                        </div>
                        <div className='w-full mt-4 sm:mt-5 lg:mt-6'>
                            <button onClick={() => scrollToSection('access2')} className={`m-auto ml-0 style-font-1 cursor-pointer ${style}`}>Access</button>
                            <p className='text-black main-font text-[12px] sm:text-[13px] lg:text-[15px] ml-1'>アクセス</p>
                        </div>
                        <div className='h-2 sm:h-3'></div>
                    </div>
                </div>
            </div>
            <div className="flex md:hidden main-font text-lg sm:text-xl w-full mt-6 justify-center">
                <div className='w-full max-w-xs'>
                    <div className='w-full flex'>
                        <div className='w-[2px] bg-[#c8ff46]'></div>
                        <div className='w-full ml-2'>
                            <div className='w-full mt-3'>
                                <button onClick={() => scrollToSection('countdown2')} className={`style-font-1 cursor-pointer ${style}`}>COUNT DOWN</button>
                                <p className='text-black main-font text-[11px] ml-1'>カウントダウン</p>
                            </div>
                            <div className='w-full mt-4'>
                                <button onClick={() => scrollToSection('news2')} className={`style-font-1 cursor-pointer ${style}`}>News</button>
                                <p className='text-black main-font text-[11px] ml-1'>ニュース</p>
                            </div>
                            <div className='w-full mt-4'>
                                <button onClick={() => scrollToSection('about2')} className={`style-font-1 cursor-pointer ${style}`}>About</button>
                                <p className='text-black main-font text-[11px] ml-1'>輝玉祭について</p>
                            </div>
                            <div className='w-full mt-4'>
                                <button onClick={() => scrollToSection('slogan2')} className={`style-font-1 cursor-pointer ${style}`}>Slogan</button>
                                <p className='text-black main-font text-[11px] ml-1'>スローガン</p>
                            </div>
                            <div className='w-full mt-4'>
                                <button onClick={() => scrollToSection('contents2')} className={`style-font-1 cursor-pointer ${style}`}>Contents</button>
                                <p className='text-black main-font text-[11px] ml-1'>コンテンツ</p>
                            </div>
                            <div className='w-full mt-4'>
                                <button onClick={() => scrollToSection('access2')} className={`style-font-1 cursor-pointer ${style}`}>Access</button>
                                <p className='text-black main-font text-[11px] ml-1'>アクセス</p>
                            </div>
                            <div className='h-3'></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuBar