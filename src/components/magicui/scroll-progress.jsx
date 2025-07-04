import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, useScroll } from 'motion/react';

const ScrollProgress = forwardRef(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]',
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = 'ScrollProgress';

export default ScrollProgress;
