import Access from "@/components/Access/Access";
import Contents from "@/components/Contents/Contents";
import Footer from "@/components/Footer/Footer";
import News from "@/components/News/News";
import Slogan from "@/components/Slogan/Slogan";
import Top from "@/components/Top/Top";
import TopBar from "@/components/TopBar/TopBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="w-full overflow-hidden flex">
      <div className="w-[92%] m-auto relative">
        <TopBar/>
        <Top/>
        <News/>
        <Slogan/>
        <Contents/>
        <Access/>
      </div>
    </div>
    <Footer/>
    </>
  );
}
