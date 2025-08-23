import { ExternalLink } from 'lucide-react'
import React from 'react'

function MenuTop() {
  return (
    <div className="w-full h-20 flex relative">
      <a
        href="https://kogyokusha.ed.jp/"
        className="w-50 h-10 border-1 border-gray-800 bg-white rounded-[50px] flex absolute right-10 top-8"
      >
        <div className='m-auto flex'>
          <p className="mr-0 main-font text-[12px] text-black mt-1">攻玉社中学・高等学校HP</p>
          <ExternalLink  className='w-4  ml-1'/>
        </div>
      </a>
    </div>
  )
}

export default MenuTop