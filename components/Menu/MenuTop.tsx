import React from 'react'

function MenuTop() {
  return (
    <div className="w-full h-20 flex relative">
        <button className="w-30 h-10 border-1 bg-blue-400 rounded-[50px] flex absolute right-10 top-8">
            <p className="m-auto main-font text-[12px] text-white">お問い合わせ</p>
        </button>
    </div>
  )
}

export default MenuTop