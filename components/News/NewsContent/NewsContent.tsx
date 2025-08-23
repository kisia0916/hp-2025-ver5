import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function NewsContent(props:{title:string,link:string,date:string, is_bottom?:boolean}) {
  const router = useRouter();

  const handleClick = () => {
    if (props.link) {
      // 外部リンクかどうかを判定
      if (props.link.startsWith('http://') || props.link.startsWith('https://')) {
        // 外部リンクの場合は新しいタブで開く
        window.open(props.link, '_blank', 'noopener,noreferrer');
      } else {
        // 内部リンクの場合はNext.jsのルーターを使用
        router.push(props.link);
      }
    }
  };
  return (
    <>
        <div 
          onClick={handleClick}
          className='w-full main-font flex justify-between mt-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200 p-2 rounded-lg'
        >
            <div className='m-auto ml-3'>
                <p className='text-1xl'>{props.title}</p>
                <p className='text-amber-400 text-1xl'>{props.date}</p>
            </div>
            <div className='m-auto mr-3'>
                <Image src="/icon/chevron-right.svg" width={24} height={24} alt="arrow icon" />
            </div>
        </div>
        {props.is_bottom === false?<div className='w-[94%] h-[1px] bg-black rounded-2xl m-auto mt-4'></div>:<></>}
    </>
  )
}

export default NewsContent