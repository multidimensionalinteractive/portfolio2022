import { useEffect, useRef } from 'react';
import { gsap, Linear } from 'gsap';

const CURSOR_STYLES = {
  CURSOR: 'fixed hidden bg-white w-4 h-4 select-none pointer-events-none z-50',
  OUTER_CURSOR: 'fixed bg-white/20 w-12 h-12 rounded-full select-none pointer-events-none z-50',
};

const isSmallScreen = () => window.innerWidth < 768; // Placeholder utility

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const outerCursorRef = useRef<HTMLDivElement>(null);

  const initCursorAnimation = () => {
    const cursor = cursorRef.current;
    const outerCursor = outerCursorRef.current;
    if (!cursor || !outerCursor || isSmallScreen()) return;

    document.addEventListener('mousemove', (e) => {
      gsap.to(cursor, { x: e.clientX - 8, y: e.clientY - 8, duration: 0.1, ease: Linear.easeNone });
      gsap.to(outerCursor, { x: e.clientX - 24, y: e.clientY - 24, duration: 0.2, ease: Linear.easeNone });
    });

    document.addEventListener('mouseenter', () => {
      gsap.to([cursor, outerCursor], { opacity: 1, duration: 0.3 });
    });

    document.addEventListener('mouseleave', () => {
      gsap.to([cursor, outerCursor], { opacity: 0, duration: 0.3 });
    });
  };

  useEffect(() => {
    initCursorAnimation();
  }, [initCursorAnimation]);

  return (
    <>
      <div ref={cursorRef} className={CURSOR_STYLES.CURSOR} />
      <div ref={outerCursorRef} className={CURSOR_STYLES.OUTER_CURSOR} />
    </>
  );
};

export default Cursor;
