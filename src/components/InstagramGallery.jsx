import React from 'react';
import { FiInstagram } from 'react-icons/fi';

// Local Instagram Image Imports
import insta1 from '../assets/images/insta_1.jpg';
import insta2 from '../assets/images/instagram_2.jpg';
import insta3 from '../assets/images/insta_3.jpg';
import insta4 from '../assets/images/insta_4.jpg';
import insta5 from '../assets/images/insta_5.jpg';
import insta6 from '../assets/images/insta_6.jpg';

const instaPhotos = [
  { id: 1, url: insta1 },
  { id: 2, url: insta2 },
  { id: 3, url: insta3 },
  { id: 4, url: insta4 },
  { id: 5, url: insta5 },
  { id: 6, url: insta6 },
];

const InstagramGallery = () => {
  return (
    <section className="py-24 bg-luxury-light border-t border-luxury-grey">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-12">
        <span className="text-[10px] tracking-superwide uppercase text-luxury-darkGrey block mb-2 font-medium">
          Behind The Theory
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-luxury-dark uppercase">
          INSTAGRAM VAULT
        </h2>
        <div className="w-12 h-[1px] bg-luxury-dark mx-auto mt-4" />
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 px-1">
        {instaPhotos.map((photo, index) => (
          <a
            key={photo.id}
            href="https://instagram.com/3rft_theory"
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square overflow-hidden block group"
          >
            {/* Image */}
            <img
              src={photo.url}
              alt={`Instagram style edit ${index + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Hover state */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FiInstagram className="text-luxury-light w-6 h-6" />
            </div>
          </a>
        ))}
      </div>

      {/* Follow Button */}
      <div className="text-center mt-12">
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
