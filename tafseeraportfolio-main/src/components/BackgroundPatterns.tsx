import React from 'react';
import { motion } from 'framer-motion';

interface FloatingParticleProps {
  delay?: number;
  duration?: number;
  size?: number;
  color?: string;
  left?: string;
  top?: string;
}

export const FloatingParticle: React.FC<FloatingParticleProps> = ({
  delay = 0,
  duration = 4,
  size = 4,
  color = 'bg-primary-500',
  left = '50%',
  top = '50%',
}) => {
  return (
    <motion.div
      className={`absolute ${color} rounded-full`}
      style={{ width: size, height: size, left, top }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 1, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
};

export const GridPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(79, 70, 229, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79, 70, 229, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
};

export const RadialGlow: React.FC<{ position?: string }> = ({ position = 'center' }) => {
  const positionClasses: Record<string, string> = {
    center: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    'top-right': 'right-0 top-0',
    'bottom-left': 'left-0 bottom-0',
    'top-left': 'left-0 top-0',
    'bottom-right': 'right-0 bottom-0',
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} w-[600px] h-[600px] pointer-events-none`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  );
};

export const DecorativeLine: React.FC<{ orientation?: 'horizontal' | 'vertical' }> = ({
  orientation = 'horizontal',
}) => {
  return (
    <motion.div
      className={`absolute ${orientation === 'horizontal' ? 'h-px w-32' : 'w-px h-32'} bg-gradient-to-r from-primary-500/0 via-primary-500/30 to-primary-500/0`}
      animate={{
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

export default { FloatingParticle, GridPattern, RadialGlow, DecorativeLine };
