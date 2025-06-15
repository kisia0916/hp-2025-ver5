import React from 'react'

function NewsContent(props:{title:string}) {
  return (
    <>
        <div className='w-full  main-font flex justify-between mt-6'>
            <div className='m-auto ml-3'>
                <p className='text-1xl'>{props.title}</p>
                <p className='text-blue-400 text-1xl'>2025.7.15</p>
            </div>
            <div className='m-auto mr-3'>
                <img src="/icon/chevron-right.svg" className='w-6 h-6' alt="arrow icon"/>
            </div>
        </div>
        <div className='w-[94%] h-[1px] bg-black rounded-2xl m-auto mt-4'></div>
    </>
  )
}

export default NewsContent