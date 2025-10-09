'use client'
import { useEffect } from 'react';
import ReactLenis from 'lenis';

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new ReactLenis({
      lerp: 0.1,
      duration: 1.8,
      touchMultiplier: 2,
      infinite: false
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Cleanup on unmount
  }, []);

  return <>{children}</>;
}
