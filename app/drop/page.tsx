import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="relative w-full min-h-screen flex">

            <div
        className="absolute inset-0 z-0"
        style={{
          background: "#ffffff",
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
        />
        <div className="w-full max-w-[700px] m-auto relative main-font-thin px-6">
            <div className="w-full flex mt-8 mb-12">
                <Link href="/" className="m-auto style-font-1 text-4xl">
                    <span className='main-font-thin text-black text-3xl'>落とし物について</span>
                </Link>
            </div>
            
            <div className='w-full space-y-6'>
                <div className='text-center'>
                    <p className='text-lg leading-relaxed'>
                        輝玉祭中に落とし物をされた方は<br />
                        以下の番号より攻玉社の村井まで<br />
                        ご連絡お願いします。
                    </p>
                </div>
                
                <div className='text-center mt-8'>
                    <p className='text-gray-700 mb-2 font-medium'>攻玉社中学高等学校</p>
                    <p className='text-2xl font-bold text-blue-600'>03-3493-0331</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page