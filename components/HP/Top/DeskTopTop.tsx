import React from 'react'
import Image from 'next/image'

function DeskTopTop() {
  return (
    <div className='h-screen relative'>

      <div className='ml-13'>
        
      </div>
      <Image
      src="/date.png"
      alt="Hero Image"
      width={600}
      height={600}
      className='w-[250px] object-cover absolute rounded-t-2xl left-[20%] top-25'
      />
      <div className="hidden xl:block ">
        <div className='w-90 h-18 bg-white rounded-[50px] border-1 absolute bottom-25 left-[10%] flex border-gray-800'>
        <div className='w-[90%] m-auto flex justify-around'>
          <a
          href="https://instagram.com/kigyokusai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram @kigyokusai"
          className='w-15 h-15 block'
          >
          <div className='w-full flex'>
            <Image src="/icon/instagram.svg" width={40} height={40} alt="Instagram" className="m-auto" />
          </div>
          <div className='w-full flex'>
            <p className='m-auto text-[10px] main-font'>@kigyokusai</p>
          </div>
          </a>
          <a
          href="https://www.youtube.com/@kigyokusai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube @kigyokusai"
          className='w-15 h-15 block'
          >
          <div className='w-full flex'>
            <Image src="/icon/youtube.svg" width={40} height={40} alt="YouTube" className="m-auto" />
          </div>
          <div className='w-full flex'>
            <p className='m-auto text-[10px] main-font'>@kigyokusai</p>
          </div>
          </a>
          <a
          href="https://x.com/kigyokusai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter) @kigyokusai"
          className='w-15 h-15 block'
          >
          <div className='w-full flex'>
            <Image src="/icon/x.svg" width={40} height={40} alt="X (Twitter)" className="m-auto" />
          </div>
          <div className='w-full flex'>
            <p className='m-auto text-[10px] main-font'>@kigyokusai</p>
          </div>
          </a>
        </div>
        </div>
      </div>
      <div className='block xl:hidden'>
        <div className='w-18 h-90 bg-white rounded-[50px] border-1 absolute bottom-25 left-[35%] flex border-gray-800'>
          <div className='w-[90%] m-auto'>
            <a
            href="https://instagram.com/kigyokusai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @kigyokusai"
            className='w-15 h-15 mb-5 block'
            >
            <div className='w-full flex'>
              <Image src="/icon/instagram.svg" width={40} height={40} alt="Instagram" className="m-auto" />
            </div>
            <div className='w-full flex'>
              <p className='m-auto text-[8px] main-font'>@kigyokusai</p>
            </div>
            </a>
            <a
            href="https://www.youtube.com/@kigyokusai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube @kigyokusai"
            className='w-15 h-15 mb-5 block'
            >
            <div className='w-full flex'>
              <Image src="/icon/youtube.svg" width={40} height={40} alt="YouTube" className="m-auto" />
            </div>
            <div className='w-full flex'>
              <p className='m-auto text-[8px] main-font'>@kigyokusai</p>
            </div>
            </a>
            <a
            href="https://x.com/kigyokusai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) @kigyokusai"
            className='w-15 h-15 mb-5 block'
            >
            <div className='w-full flex'>
              <Image src="/icon/x.svg" width={40} height={40} alt="X (Twitter)" className="m-auto" />
            </div>
            <div className='w-full flex'>
              <p className='m-auto text-[8px] main-font'>@kigyokusai</p>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeskTopTop