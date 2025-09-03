"use client"
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

function GoodsCard(props:{img:string,img_back?:string,title:string,value:number}) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isBack, setIsBack] = useState(false)

  // Close on ESC and lock body scroll when open
  useEffect(() => {
    setMounted(true)
    if (isOpen) {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false)
      }
      document.addEventListener('keydown', onKey)
      const prevOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.removeEventListener('keydown', onKey)
        document.body.style.overflow = prevOverflow
      }
    }
  }, [isOpen])

  // Helpers for clear file front/back toggle
  const isClearFile = props.title.includes('クリアファイル') || props.img.includes('クリアファイル')
  const toBack = (img: string) => img.includes('表') ? img.replace('表', '裏') : img
  const toFront = (img: string) => img.includes('裏') ? img.replace('裏', '表') : img
  const frontImg = props.img_back ? props.img : toFront(props.img)
  const backImg = props.img_back ? props.img_back : toBack(props.img)
  const overlayImg = isClearFile ? (isBack ? backImg : frontImg) : props.img
  const canToggle = isClearFile && (Boolean(props.img_back) || props.img.includes('表') || props.img.includes('裏'))

  return (
  <div className='w-full max-w-full sm:w-55 h-65 sm:h-65 border-1 border-gray-800 rounded-2xl sm:rounded-3xl bg-white relative z-10'>
        <div className='w-full flex mt-3 sm:mt-5'>
        </div>
  <div className='w-full flex h-44 sm:h-40 px-2 cursor-zoom-in'  onClick={() => { setIsBack(false); setIsOpen(true) }}>
            <Image
            src={`/goods/${props.img}`}
            alt={props.title || 'goods_sample'}
            width={100}
            height={100}
            className={`m-auto ${props.title.includes('クリアファイル') ? 'h-full' : 'w-40'} `}
            />
        </div>
  <div className='w-full flex mt-1 px-2'>
            <div className='m-auto'>
    <p className='main-font text-center text-sm sm:text-base break-words'>{props.title}</p>
    <p className='main-font-thin text-red-400 text-center text-sm sm:text-base'>{props.value}円</p>
            </div>
        </div>
        {mounted && isOpen && createPortal(
          <div
            className="fixed inset-0 z-[999999] bg-black/80 flex items-center justify-center p-6"
            role="dialog"
            aria-modal="true"
            onClick={() => setIsOpen(false)}
          >
            <button
              aria-label="Close"
              onClick={(e) => { e.stopPropagation(); setIsOpen(false) }}
              className="absolute top-4 right-4 z-[1000000] text-white/90 hover:text-white text-5xl sm:text-6xl leading-none w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center select-none"
            >
              ×
            </button>
            <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={`/goods/${overlayImg}`}
                alt={props.title || 'goods_sample'}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
              {canToggle && (
                <button
                  onClick={() => setIsBack(v => !v)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-white text-black px-4 py-2 rounded-full shadow-md border border-black/10"
                  aria-pressed={isBack}
                >
                  {isBack ? '表面を見る' : '裏面を見る'}
                </button>
              )}
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}

export default GoodsCard