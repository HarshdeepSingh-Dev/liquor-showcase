'use client'
import { useState, useEffect } from 'react';

// type Stat = {
//   number: number;
//   label: string;
// };

// Hook to animate count-up
function Counter(target: number, inView: boolean, duration = 2) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = target;
    const increment = end / (duration * 60);
    let raf: number;

    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.ceil(start));
        raf = requestAnimationFrame(step);
      } else {
        setCount(end);
        cancelAnimationFrame(raf);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, inView, duration]);

  return count;
}

export default Counter;