
import React from 'react'

function Access() {
  return (
    <div className='w-full mb-30 mt-30'>
        <div className='w-full flex'>
            <div className='m-auto'>
                <p className='title-subfont text-5xl m-auto text-amber-400'>Access</p>
                <div className='w-full flex'>
                    <p className='main-font m-auto'>アクセス</p>
                </div>
            </div>
        </div>
        <div className='w-[40%] h-[1px] bg-black m-auto rounded-2xl mt-3 mb-3'></div>
    <div style={{ width: '90%', height: '300px' }} className='rounded-2xl overflow-hidden m-auto'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1380196654077!2d139.7108209763787!3d35.62432383309693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ae0c5502095%3A0x15ba88c6e0b7b754!2z5pS7546J56S-5Lit5a2m5qCh44O76auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1750000340257!5m2!1sja!2sjp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className='main-font w-full  mt-5 ml-1'>
        <div className='w-full flex'>
          <p className='text-2xl text-blue-400 m-auto'>攻玉社中学・高等学校</p>
        </div>
        <div className='w-full flex'>
          <p className='text-1xl m-auto'>〒141-0031</p>
        </div>
        <div className='w-full flex'>
          <p className='text-1xl m-auto'>東京都品川区西五反田５丁目１４−２</p>
        </div>
        <div className='w-full flex mt-3'>
          <p className='text-1xl m-auto text-2xl'>東急目黒線</p>
        </div>
        <div className='w-full flex text-2xl'>
          <p className='text-1xl m-auto text-pink-400'>不動前駅より徒歩 <span className=''>3分</span></p>
        </div>
        <div className='w-full flex mt-3 text-gray-500'>
          <p className='text-1xl m-auto'>(急行電車は停車しませんのでご注意ください)</p>
        </div>
        <div className='w-full flex mx-auto text-center leading-relaxed text-gray-500'>
          <p className='text-1xl m-auto'>駐車場・駐輪場はございません。ご来校の際は公共交通機関をご利用ください。</p>
        </div>
      </div>
    </div>
  )
}

export default Access