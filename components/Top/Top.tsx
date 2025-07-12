import React from 'react'
import MobileTop from './MobileTop'
import DeskTopTop from './DeskTopTop'

function Top() {
  return (
    <>
      <div className='md:hidden w-full'>
        <MobileTop/>
      </div>
      <div className='hidden md:block w-full '>
        <DeskTopTop/>
      </div>
    </>
  )
}

export default Top