'use client';
import { useLayoutEffect, useRef } from 'react';
import Tempus from '@studio-freight/tempus';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroller() {
  const lenis = useRef<InstanceType<typeof Lenis> | null>(null);
  const observer = useRef<ResizeObserver | null>(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    lenis.current = new Lenis({
      smoothWheel: true,
    });

    const el = document.querySelector('main');
    if ('ResizeObserver' in window && el) {
      observer.current = new ResizeObserver(() => {
        lenis.current?.resize();
      });
      observer.current.observe(el);
    }

    function onFrame(time: number) {
      lenis.current?.raf(time);
    }

    const unsubscribe = Tempus.add(onFrame);

    return () => {
      unsubscribe();
      if (observer.current && el) {
        observer.current.unobserve(el);
      }
      lenis.current?.destroy();
      lenis.current = null;
    };
  }, []);

  return null;
}
