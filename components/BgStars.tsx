'use client';
import { useEffect, useRef } from 'react';

export default function BgStarsFull() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d')!;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    // Density scales with viewport area (clamped for perf)
    const countForArea = () => {
      const a = window.innerWidth * window.innerHeight;
      return Math.max(70, Math.min(160, Math.round(a / 22000)));
    };

    let STAR_COUNT = countForArea();
    let stars = makeStars(STAR_COUNT);

    function makeStars(n: number) {
      // ↓ slower speeds
      const SPEED_MIN = 0.01, SPEED_MAX = 0.06;
      const R_MIN = 0.6, R_MAX = 1.6;
      const ALPHA_MIN = 0.35, ALPHA_MAX = 0.9;
      return Array.from({ length: n }, () => ({
        x: Math.random(),                 // 0..1 of width
        y: Math.random(),                 // 0..1 of height
        r: R_MIN + Math.random() * (R_MAX - R_MIN),
        s: SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN),
        a: ALPHA_MIN + Math.random() * (ALPHA_MAX - ALPHA_MIN),
      }));
    }

    const resize = () => {
      // match the window size, scale for DPR
      canvas.width  = Math.floor(window.innerWidth  * DPR);
      canvas.height = Math.floor(window.innerHeight * DPR);
      canvas.style.width = '100%';
      canvas.style.height = '100%';

      // rebuild stars if density should change a lot
      const next = countForArea();
      if (Math.abs(next - STAR_COUNT) > 10) {
        STAR_COUNT = next;
        stars = makeStars(STAR_COUNT);
      }
    };

    let raf = 0;
    const draw = () => {
      const { width: w, height: h } = canvas;
      ctx.clearRect(0, 0, w, h);

      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      // ↓ bigger = slower
      const SLOW = 350;

      for (const st of stars) {
        st.y += st.s / SLOW;     // much slower drift
        if (st.y > 1) st.y = 0;  // wrap to top
        ctx.globalAlpha = st.a;
        ctx.beginPath();
        ctx.arc(st.x * w, st.y * h, st.r * DPR, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      }
      ctx.restore();

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(draw);
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Full page, behind content, doesn't catch clicks
  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none w-full h-full" />;
}
