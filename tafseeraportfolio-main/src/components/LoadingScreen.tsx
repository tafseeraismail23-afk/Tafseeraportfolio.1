import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC<{ onLoadingComplete: () => void }> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] bg-dark-bg flex flex-col items-center justify-center"
      >
        {/* Background animation */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold gradient-text">
              T
            </h1>
          </motion.div>

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-display font-bold text-white mb-8"
          >
            Tafseera
          </motion.h2>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-hero"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Progress text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-sm mt-4"
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.p>

          {/* Loading dots */}
          <motion.div
            className="flex justify-center gap-2 mt-6"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-primary"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
