import React from 'react'
import NewsContent from './NewsContent/NewsContent'
import MoreButton from './MoreButton/MoreButton'

function News() {
  return (
    <div className='w-full mt-10 '>
        <div className='w-full flex'>
            <div className='m-auto'>
                <p className='main-font text-4xl m-auto text-amber-400'>News</p>
                <div className='w-full flex'>
                    <p className='main-font m-auto'>ニュース</p>
                </div>
            </div>
        </div>
        <div className='w-[40%] h-[1px] bg-black m-auto rounded-2xl mt-3 mb-3'></div>
        <div className='w-full'>
            <NewsContent title='ホームページを公開しました'/>
            <NewsContent title='カウントダウンを開始しました！'/>
            <NewsContent title='カウントダウンを開始しました！'/>
        </div>

    </div>
  )
}

export default News