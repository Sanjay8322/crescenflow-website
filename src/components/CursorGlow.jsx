import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const mouseX = useMotionValue(
    typeof window !== 'undefined' ? window.innerWidth / 2 : 0
  );
  const mouseY = useMotionValue(
    typeof window !== 'undefined' ? window.innerHeight / 2 : 0
  );

  const x = useSpring(mouseX, { stiffness: 55, damping: 20, mass: 0.5 });
  const y = useSpring(mouseY, { stiffness: 55, damping: 20, mass: 0.5 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        width: 680,
        height: 680,
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(238,231,223,0.52) 0%, rgba(71,124,94,0.06) 50%, transparent 72%)',
        filter: 'blur(48px)',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      className="hidden md:block"
    />
  );
}
