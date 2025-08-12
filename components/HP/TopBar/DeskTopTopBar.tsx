import React from 'react'
import Image from 'next/image'

function DeskTopTopBar() {
  return (
        <div className='hidden md:block w-full ml-7'>
          <div className='w-full flex'>
            <div className='md:block w-[92%] m-auto h-15 justify-between flex rounded-[50px] '>
              <div className='w-full flex justify-between'>
                  <div className='flex '>
                      <div className='m-auto mt-5'>
                          <Image src="/logo/logo4.png" width={40} height={40} alt="Logo" className="mr-2" />
                      </div>
                      <div className='m-auto mr-2 mt-[14px] text-2xl ml-1'>
                          <p className='main-font text-gray-500'>第55回輝玉祭</p>
                          <p className='main-font leading-[10px] text-gray-500'>KIGYOKUSAI</p>
                      </div>
                  </div>  
              </div>
            </div>
          </div>
        </div>
  )
}

export default DeskTopTopBar