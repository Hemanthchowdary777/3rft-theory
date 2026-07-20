import React from 'react';
import { FiInstagram } from 'react-icons/fi';

// Local Instagram Image Imports




const InstagramGallery = () => {
  return (
    <section className="py-24 bg-luxury-light border-t border-luxury-grey">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <span className="text-[10px] tracking-superwide uppercase text-luxury-darkGrey block mb-2 font-medium">
          Behind The Theory
        </span>
  
        <h2 className="text-3xl md:text-5xl font-serif text-luxury-dark uppercase">
          INSTAGRAM VAULT
        </h2>
  
        <div className="w-12 h-[1px] bg-luxury-dark mx-auto mt-4 mb-8" />
  
        <p className="text-sm text-luxury-darkGrey max-w-xl mx-auto mb-10">
          Follow us on Instagram for the latest thrift drops, exclusive collections,
          and behind-the-scenes updates.
        </p>
  
        <a
          href="https://instagram.com/3rft_theory"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-8 py-4 border border-luxury-dark text-luxury-dark text-xs tracking-widest uppercase font-semibold hover:bg-luxury-dark hover:text-luxury-light transition-all duration-300"
        >
          <FiInstagram className="w-4 h-4" />
          <span>Follow Us On Instagram</span>
        </a>
      </div>
    </section>
  );
};

export default InstagramGallery;
