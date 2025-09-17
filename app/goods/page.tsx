"use client"
import GoodsCard from "@/components/Goods/GoodsCard"
import Link from "next/link"

function page() {

    return(
    <div className="relative w-full min-h-screen flex">

            <div
        className="absolute inset-0 z-0"
        style={{
          background: "#ffffff",
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
        />
        
      <div className="w-full max-w-[700px] m-auto relative">
        <div className="w-full flex mt-8">
        <Link href="/" className="m-auto style-font-1 text-4xl">KIGYOKUSAI2025</Link>
        </div>
        <div className='w-full flex z-100 mt-4'>
        <div className='m-auto w-50 h-12 border-1 rounded-full border-gray-800 bg-blue-400'>
          <div className='flex w-full mt-4'>
            <span className='style-font-1 text-[32px] m-auto mb-0 text-black leading-[10px]'>Goods</span>
          </div>
          <div className='flex w-full'>
            <span className='m-auto main-font mt-[2px] text-[12px]'>グッズ</span>
          </div>
        </div>
       </div>
       <div className="w-full flex  mt-10">
        <span className="m-auto main-font text-[20px]">グッズは<Link href="https://kurumi.kigyokusai.com/map/project/9b70e619-f7b2-4a6c-aad5-2a5b0963ef96?floor=cabdc17c-0d14-4a8f-9714-ba024465e014" className="text-blue-500 underline">校庭</Link>で販売中！
        </span>
       </div>
       <div className="w-full flex mt-12">
        <div className="grid grid-cols-2 gap-5 sm:gap-8 m-auto">
          <GoodsCard img="akuki-.png" title="アクリルキーホルダー" value={600}/>
          <GoodsCard img="blue_pen.png" title="シャーペン (blue)" value={700}/>
          <GoodsCard img="pen.png" title="シャーペン(pink)" value={700}/>
          <GoodsCard img="クリアファイル１表.png" title="クリアファイル１"img_back="file1_back.png" value={300}/>
          <GoodsCard img="file2-front.png" title="クリアファイル２" img_back="file2-back.png" value={300}/>
        </div>
       </div>
       <div className="h-10"></div>
      </div>

    </div>
    )
}

export default page