"use client";

import Access from "@/components/HP/Access/Access";
import Contents from "@/components/HP/Contents/Contents";
import Footer from "@/components/HP/Footer/Footer";
import News from "@/components/News/News";
import Slogan from "@/components/HP/Slogan/Slogan";
import Top from "@/components/HP/Top/Top";

import DeskTopTopBar from "@/components/HP/TopBar/DeskTopTopBar";
import MenuBar from "@/components/HP/Menu/MenuBar";
import Hero from "@/components/HP/Hero/Hero";
import MenuTop from "@/components/HP/Menu/MenuTop";
import Image from "next/image";
import { useEffect, useRef } from "react";
import About from "@/components/HP/About/About";
import CountDown from "@/components/HP/CountDown/CountDown";
import HeroTop from "@/components/HP/Hero/HeroTop";

export default function Home() {
  const mainScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // スクロールバーを非表示にするCSSを追加
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-hidden::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);



  }, []);

  return (
    <>

    <div className="w-full overflow-y-scroll overflow-x-hidden md:overflow-y-hidden h-screen flex bg-[#F8FAFC]  relative z-10">
      <div className="w-full m-auto md:hidden">
        <HeroTop/>
        <Hero/>
        <div className="w-full bg-white relative">
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "#ffffff",
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative z-10 w-[92%] m-auto pt-4">
                <div id="countdown" className="h-50 mt-30">
                    <CountDown/>
                </div>
                <div id="news" className="h-100 mt-30">
                    <News/>
                </div>
                <div id="about" className="h-100 mt-30">
                    <About/>
                </div>
                <div id="slogan" className="h-100 mt-30">
                    <Slogan/>

                </div>
                <div id="contents" className="h-440 mt-30">
                    <Contents/>
                </div>
                <div id="access" className="h-170 mt-40">
                    <Access/>
                </div>
            <div className="h-30"></div>
          </div>
        </div>
          <Footer/>
      </div>
     {/*pc*/}
          <div className="hidden md:block w-full relative z-10 overflow-y-hidden">
            <div className="absolute w-full h-screen flex left-0 top-0 -z-10 pointer-events-none">
                <Image src="/photo/bg7.png" alt="Background" fill className="object-cover" />
            </div>
            <div
                className="absolute inset-0 opacity-40 -z-20 pointer-events-none"
                style={{
                backgroundImage: `
                  linear-gradient(to right, #d1d5db 1px, transparent 1px),
                  linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
                }}
            ></div>
            <div className="w-full h-screen flex">
              <div className="h-screen" style={{ width: "calc((100% - 512px) / 2)" }}>
                  <DeskTopTopBar/>
                  <Top/>
              </div>
              <div className="w-[512px] flex">
                <div 
                  ref={mainScrollRef}
                    id="mainScroll"
                    className="m-auto w-[95%] h-[95%] bg-white rounded-4xl flex overflow-y-scroll border-1 border-gray-800 Z-10 scrollbar-hidden"
                  style={{ 
                    scrollBehavior: 'smooth',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  <div className="w-full">
                    <HeroTop/>
                    <Hero/>
                    <div className="w-full bg-white relative">
                      <div
                        className="absolute inset-0 z-0"
                        style={{
                          background: "#ffffff",
                          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                      <div className="w-full flex">
                        <div className="m-auto w-[92%] mt-0">
                          <div id="countdown2" className="mt-40">
                            <CountDown/>
                          </div>
                          <div id="news2" className="mt-40">
                            <News/>
                          </div>
                          <div id="about2" className="mt-40">
                            <About/>
                          </div>
                          <div id="slogan2" className="mt-40">
                            <Slogan/>
                          </div>
                          <div id="contents2" className="mt-40">
                            <Contents/>
                          </div>
                          <div id="access2" className="mt-40">
                            <Access/>
                          </div>
                          <div className="h-30"></div>
                        </div>
                    </div>
                    </div>
                    <Footer/>

                  </div>

                </div>
              </div>
              <div className="h-screen" style={{ width: "calc((100% - 512px) / 2)" }}>
                <MenuTop/>
                <MenuBar/>
              </div>
            </div>
          </div>
      
    </div>


    </>
  );
}