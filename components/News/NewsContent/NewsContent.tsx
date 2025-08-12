import React from 'react'
import Image from 'next/image'

function NewsContent(props:{title:string}) {
  return (
    <>
        <div className='w-full  main-font flex justify-between mt-6'>
            <div className='m-auto ml-3'>
                <p className='text-1xl'>{props.title}</p>
                <p className='text-blue-400 text-1xl'>2025.7.15</p>
            </div>
            <div className='m-auto mr-3'>
                <Image src="/icon/chevron-right.svg" width={24} height={24} alt="arrow icon" />
            </div>
        </div>
        <div className='w-[94%] h-[1px] bg-black rounded-2xl m-auto mt-4'></div>
    </>
  )
}

export default NewsContent