import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import maleModel from '../assets/images/hero/male-model.jpg';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-luxury-beige flex items-center justify-center">
      {/* Background Image with subtle zoom animation */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img 
          src={maleModel} 
          alt="3RFT THEORY Editorial Male Model" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Dark Overlay (35%) */}
      <div className="absolute inset-0 bg-black/35 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Animated Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-white font-serif text-5xl sm:text-7xl md:text-9xl font-bold tracking-superwide uppercase mb-4"
        >
          3RFT THEORY
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="text-luxury-light/95 font-sans text-xs sm:text-sm md:text-base tracking-widest uppercase mb-10 max-w-xl font-light"
        >
          Premium Curated Vintage & Streetwear
        </motion.p>

        {/* Shop Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        >
          <Link
            to="/shop"
            className="inline-block px-8 py-4 border border-white text-white text-xs font-sans tracking-widest uppercase hover:bg-white hover:text-luxury-dark transition-all duration-500 ease-in-out font-medium select-none"
          >
            SHOP COLLECTION &rarr;
          </Link>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white opacity-50 pointer-events-none z-10"
      >
        <span className="text-[9px] tracking-widest uppercase font-light mb-2">Scroll</span>
        <div className="w-[1px] h-10 bg-white/40" />
      </motion.div>
    </div>
  );
};

export default Hero;
