import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 bg-luxury-dark text-luxury-light z-[999] flex flex-col items-center justify-center select-none"
    >
      <div className="flex flex-col items-center">
        {/* Animated Brand Header */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-superwide uppercase text-luxury-light"
        >
          3RFT THEORY
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[9px] tracking-widest text-luxury-beige uppercase mt-3 font-light"
        >
          PREMIUM VINTAGE & STREETWEAR ARCHIVE
        </motion.p>

        {/* Progress Tracker bar */}
        <div className="w-40 h-[1px] bg-luxury-charcoal mt-8 overflow-hidden relative">
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="absolute top-0 bottom-0 w-1/2 bg-luxury-beige"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
