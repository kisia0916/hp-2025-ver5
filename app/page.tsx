import Access from "@/components/HP/Access/Access";
import Contents from "@/components/HP/Contents/Contents";
import Footer from "@/components/HP/Footer/Footer";
import News from "@/components/News/News";
import Slogan from "@/components/HP/Slogan/Slogan";
import Top from "@/components/HP/Top/Top";
import TopBar from "@/components/HP/TopBar/TopBar";

import DeskTopTopBar from "@/components/HP/TopBar/DeskTopTopBar";
import MenuBar from "@/components/HP/Menu/MenuBar";
import Hero from "@/components/HP/Hero/Hero";
import MenuTop from "@/components/HP/Menu/MenuTop";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="w-full overflow-hidden flex relative bg-[#F8FAFC]">

        <div className="block md:hidden w-full m-auto relative z-10">
          <div
              className="absolute inset-0 opacity-40 -z-20"
              style={{
              backgroundImage: `
                linear-gradient(to right, #d1d5db 1px, transparent 1px),
                linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              }}
          ></div>
            <div className="w-full flex">
              <div className="w-full">
                <TopBar/>
                <div className="w-[92%] m-auto">
                  <Top/>
                  <News/>
                  <Slogan/>
                  <Contents/>
                  <Access/>
                </div>
              </div>
            </div>
        </div>


        <div className="hidden md:block w-full relative z-10">
          <div className="absolute w-full h-screen flex left-0 top-0 -z-10">
              <Image src="/photo/bg7.png" alt="Background" fill className="object-cover" />
          </div>
          <div
              className="absolute inset-0 opacity-40 -z-20"
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
            <div className="h-screen w-[512px] flex">
              <div className="m-auto w-[95%] h-[95%] bg-white rounded-4xl flex overflow-y-scroll border-1">
                <div className="m-auto w-[92%] mt-0">
                  <Hero/>
                  <News/>
                  <Slogan/>
                  <Contents/>
                  <Access/>
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
          <Footer/>
        {/* <div className="w-full h-screen flex">
        <div className="m-auto text-center">
          <p className="soon-font text-6xl">KIGYOKUSAI 2025</p>
          <p className="soon-font text-6xl">COMING SOON</p>
        </div>
    </div> */}
    </>
  );
}