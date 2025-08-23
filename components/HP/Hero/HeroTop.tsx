import React, { useEffect, useRef, useState } from 'react'
import Menu from './Menu';

function HeroTop() {
      const rotateTextRefMobile = useRef<HTMLDivElement>(null);
      const rotateTextRefDesktop = useRef<HTMLDivElement>(null);
      const topBarRef = useRef<HTMLDivElement>(null);
      const [now_text,set_now_text] = React.useState<string>('KIGYOKUSAI:2025');
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [showFloatingMenu, setShowFloatingMenu] = useState(false);
      useEffect(() => {
        const textMobile = rotateTextRefMobile.current;
        const textDesktop = rotateTextRefDesktop.current;
        
        if (textMobile) {
          textMobile.classList.add('is-active');
        }
        if (textDesktop) {
          textDesktop.classList.add('is-active');
        }

        // Intersection Observer for viewport monitoring
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // 要素がビューポートに含まれた時
                setShowFloatingMenu(false);
              } else {
                setShowFloatingMenu(true)
              }
            });
          },
          {
            // rootMargin を負の値にすることで、要素が完全に見えなくなった時にトリガー
            rootMargin: '0px',
            threshold: 0
          }
        );

        // モバイル用とデスクトップ用の両方を監視
        if (topBarRef.current) {
          observer.observe(topBarRef.current);
        }

        // スクロール監視 - 55px以上スクロールした場合にフローティングメニューを表示
        const handleScroll = () => {
          const scrollY = window.scrollY;
          setShowFloatingMenu(scrollY > 55);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
          observer.disconnect();
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <>
      {/* モバイル用 - 768px未満で表示 */}
      <div id="top" ref={topBarRef} className='w-full bg-white flex justify-between items-center border-b-1 border-gray-800 h-[55px] px-4 md:hidden'>
        <div className='w-10'></div>
        <div className="flex-1 flex justify-center">
          <div className="headline">
            <div className="rotate-text" ref={rotateTextRefMobile} aria-hidden="true">
              <span className="char style-font-1 text-black style-font-1 text-4xl" style={{"--char-index": 0} as React.CSSProperties}> K </span>
              <span className="char style-font-1 text-black style-font-1 text-4xl" style={{"--char-index": 1} as React.CSSProperties}> I </span>
              <span className="char style-font-1 text-black style-font-1 text-4xl" style={{"--char-index": 2} as React.CSSProperties}> G </span>
              <span className="char style-font-1 text-black style-font-1 text-4xl" style={{"--char-index": 3} as React.CSSProperties}> Y </span>
              <span className="char style-font-1 text-black style-font-1 text-4xl" style={{"--char-index": 4} as React.CSSProperties}> O </span>
              <span className="char style-font-1 text-black style-font-1 text-4xl" style={{"--char-index": 5} as React.CSSProperties}> K </span>
              <span className="char style-font-1 text-black style-font-1 text-4xl" style={{"--char-index": 6} as React.CSSProperties}> U </span>
              <span className="char style-font-1 text-black style-font-1 text-4xl" style={{"--char-index": 7} as React.CSSProperties}> S </span>
              <span className="char style-font-1 text-black style-font-1 text-4xl" style={{"--char-index": 8} as React.CSSProperties}> A </span>
              <span className="char style-font-1 text-black style-font-1 text-4xl" style={{"--char-index": 9} as React.CSSProperties}> I </span>
              <span className="whitespace">&nbsp;</span>
              <span className="char style-font-1 text-black style-font-1 text-4xl" style={{"--char-index": 11} as React.CSSProperties}> 2 </span>
              <span className="char style-font-1 text-black style-font-1 text-4xl" style={{"--char-index": 12} as React.CSSProperties}> 0 </span>
              <span className="char style-font-1 text-black style-font-1 text-4xl" style={{"--char-index": 13} as React.CSSProperties}> 2 </span>
              <span className="char style-font-1 text-black style-font-1 text-4xl" style={{"--char-index": 14} as React.CSSProperties}> 5 </span>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col justify-center items-center w-10 h-8 space-y-1 "
          aria-label="メニュー"
        >
          <div className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>

      </div>
        {showFloatingMenu && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='flex flex-col justify-center items-center space-y-1 md:hidden fixed top-4 right-2 transform  w-15 h-15  z-50 rounded-[10px] border-1 border-gray-800 bg-[#c8ff46]'>
                  <div className='h-2'></div>
                  <div className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                  <div className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                  <span className='style-font-1'>Menu</span>
            </button>
      )}
      {/* デスクトップ用 - 768px以上で表示 */}
      <div id="top" className='w-full bg-white hidden md:flex justify-center items-center border-b-1 border-gray-800 h-[77px] px-4'>
        <div className="headline">
          <div className="rotate-text" ref={rotateTextRefDesktop} aria-hidden="true">
            <span className="char style-font-1 text-black style-font-1 text-7xl" style={{"--char-index": 0} as React.CSSProperties}> K </span>
            <span className="char style-font-1 text-black style-font-1 text-7xl" style={{"--char-index": 1} as React.CSSProperties}> I </span>
            <span className="char style-font-1 text-black style-font-1 text-7xl" style={{"--char-index": 2} as React.CSSProperties}> G </span>
            <span className="char style-font-1 text-black style-font-1 text-7xl" style={{"--char-index": 3} as React.CSSProperties}> Y </span>
            <span className="char style-font-1 text-black style-font-1 text-7xl" style={{"--char-index": 4} as React.CSSProperties}> O </span>
            <span className="char style-font-1 text-black style-font-1 text-7xl" style={{"--char-index": 5} as React.CSSProperties}> K </span>
            <span className="char style-font-1 text-black style-font-1 text-7xl" style={{"--char-index": 6} as React.CSSProperties}> U </span>
            <span className="char style-font-1 text-black style-font-1 text-7xl" style={{"--char-index": 7} as React.CSSProperties}> S </span>
            <span className="char style-font-1 text-black style-font-1 text-7xl" style={{"--char-index": 8} as React.CSSProperties}> A </span>
            <span className="char style-font-1 text-black style-font-1 text-7xl" style={{"--char-index": 9} as React.CSSProperties}> I </span>
            <span className="whitespace">&nbsp;</span>
            <span className="char style-font-1 text-black style-font-1 text-7xl" style={{"--char-index": 11} as React.CSSProperties}> 2 </span>
            <span className="char style-font-1 text-black style-font-1 text-7xl" style={{"--char-index": 12} as React.CSSProperties}> 0 </span>
            <span className="char style-font-1 text-black style-font-1 text-7xl" style={{"--char-index": 13} as React.CSSProperties}> 2 </span>
            <span className="char style-font-1 text-black style-font-1 text-7xl" style={{"--char-index": 14} as React.CSSProperties}> 5 </span>
          </div>
        </div>
      </div>

      {/* フローティングメニューボタン - モバイルでトップバーが見えない時のみ表示 */}

      {/* メニューオーバーレイ */}
      {isMenuOpen && (
        <>
          <Menu showFloatingMenu={showFloatingMenu}/>
        </>
      )}
    </>
  )
}

export default HeroTop