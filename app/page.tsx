import Top from "@/components/Top/Top";
import TopBar from "@/components/TopBar/TopBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <TopBar/>
      <Top/>
    </div>
  );
}
