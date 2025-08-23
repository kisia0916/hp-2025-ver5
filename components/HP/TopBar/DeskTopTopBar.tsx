import React from 'react'
import Image from 'next/image'

function DeskTopTopBar() {
  return (
        <div className='hidden md:block w-full ml-7'>
          <div className='w-full flex'>
            <div className='md:block w-[92%] m-auto h-15 justify-between flex rounded-[50px] '>
              <div className='w-full flex justify-between'>
                  <div className='flex'>
                    <div className='w-60 h-15 flex border-1 border-gray-800 rounded-full bg-white mt-5'>
                      <div className='m-auto text-2xl'>
                          <span className='main-font text-black'>第55回輝玉祭</span>
                      </div>
                    </div>
                  </div>  
              </div>
            </div>
          </div>
        </div>
  )
}

export default DeskTopTopBar