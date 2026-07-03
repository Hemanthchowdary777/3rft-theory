import React, { useEffect } from 'react';
import { FiInstagram, FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-32 pb-24 bg-luxury-light min-h-screen font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="border-b border-luxury-grey pb-8 mb-16">
          <span className="text-[10px] tracking-superwide uppercase text-luxury-darkGrey block mb-2 font-medium">
            Customer Relations
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-luxury-dark uppercase">
            GET IN TOUCH
          </h1>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Details & Socials (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div className="space-y-6">
              <span className="text-[9px] tracking-widest text-luxury-darkGrey font-semibold uppercase block">
                ORDER PLACEMENT
              </span>
              <h2 className="text-3xl font-serif text-luxury-dark uppercase tracking-wide">
                DIRECT TO ARCHIVIST
              </h2>
              <p className="text-xs text-luxury-darkGrey leading-relaxed font-light">
                To purchase any item, click on the shop card to load its details, and initiate a WhatsApp message or Instagram DM. We do not process orders via traditional cart configurations.
              </p>
            </div>

            {/* Channels List */}
            <div className="flex flex-col space-y-8">
              {/* WhatsApp */}
              <a
                href="https://wa.me/918357977520"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 border border-luxury-grey hover:border-luxury-dark transition-all duration-300 group"
              >
                <div className="p-3 bg-luxury-beige text-luxury-dark rounded-full group-hover:bg-luxury-dark group-hover:text-luxury-light transition-colors duration-300">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider text-luxury-dark uppercase">WhatsApp Hotline</h3>
                  <span className="text-[11px] font-sans font-light text-luxury-darkGrey">+91 83579 77520</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/3rft_theory"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 border border-luxury-grey hover:border-luxury-dark transition-all duration-300 group"
              >
                <div className="p-3 bg-luxury-lightGrey text-luxury-dark rounded-full group-hover:bg-luxury-dark group-hover:text-luxury-light transition-colors duration-300">
                  <FiInstagram className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider text-luxury-dark uppercase">Instagram DM</h3>
                  <span className="text-[11px] font-sans font-light text-luxury-darkGrey">@3rft_theory</span>
                </div>
              </a>

              {/* Email */}
              <div className="flex items-center space-x-4 p-4 border border-luxury-grey hover:border-luxury-dark transition-all duration-300 group">
                <div className="p-3 bg-luxury-lightGrey text-luxury-dark rounded-full group-hover:bg-luxury-dark group-hover:text-luxury-light transition-colors duration-300">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider text-luxury-dark uppercase">Email Support</h3>
                  <span className="text-[11px] font-sans font-light text-luxury-darkGrey">contact@3rfttheory.com</span>
                </div>
              </div>
            </div>

            {/* Support Timings */}
            <div className="pt-6 border-t border-luxury-lightGrey">
              <span className="text-[9px] tracking-widest text-luxury-darkGrey/60 uppercase block mb-1">
                RESPONSE TIMELINES
              </span>
              <p className="text-[10px] text-luxury-darkGrey leading-relaxed font-light">
                Direct chat inquiries are answered between 10:00 AM and 10:00 PM IST. Emails are typically resolved within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Google Map Placeholder (Span 7) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <span className="text-[9px] tracking-widest text-luxury-darkGrey font-semibold uppercase block">
              OUR OUTPOST
            </span>
            <div className="relative aspect-[16/10] lg:aspect-[12/9] bg-luxury-beige border border-luxury-stone overflow-hidden group select-none flex items-center justify-center">
              {/* Premium Grayscale SVG Mock Map */}
              <svg 
                className="absolute inset-0 w-full h-full opacity-30 grayscale filter group-hover:scale-[1.02] transition-transform duration-1000 ease-out" 
                viewBox="0 0 800 600" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100%" height="100%" fill="#f5f5f0" />
                {/* Streets Grid */}
                <path d="M 0 100 L 800 100 M 0 300 L 800 300 M 0 500 L 800 500" stroke="#d8d8ce" strokeWidth="20" fill="none" />
                <path d="M 150 0 L 150 600 M 450 0 L 450 600 M 700 0 L 700 600" stroke="#d8d8ce" strokeWidth="20" fill="none" />
                
                {/* Secondary Streets */}
                <path d="M 0 200 L 800 200 M 0 420 L 800 420" stroke="#e6e6dd" strokeWidth="10" fill="none" />
                <path d="M 300 0 L 300 600 M 580 0 L 580 600" stroke="#e6e6dd" strokeWidth="10" fill="none" />
                
                {/* Blocks */}
                <rect x="180" y="120" width="250" height="160" rx="10" fill="#e6e6dd" />
                <rect x="470" y="120" width="210" height="160" rx="10" fill="#e6e6dd" />
                <rect x="180" y="320" width="250" height="80" rx="10" fill="#e6e6dd" />
                <rect x="470" y="320" width="210" height="80" rx="10" fill="#e6e6dd" />
              </svg>

              {/* Map UI elements */}
              <div className="absolute inset-0 bg-black/5" />
              
              {/* Central Map Pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 bg-luxury-dark rounded-full flex items-center justify-center text-luxury-light shadow-xl border border-luxury-stone animate-bounce">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div className="mt-4 px-4 py-2 bg-luxury-dark text-luxury-light text-[9px] font-sans tracking-superwide uppercase border border-luxury-charcoal shadow-md">
                  3RFT THEORY ARCHIVE OUTPOST
                </div>
              </div>

              {/* Zoom Controls Mockup */}
              <div className="absolute bottom-4 right-4 flex flex-col space-y-1 bg-white border border-luxury-grey shadow-sm">
                <button className="w-8 h-8 flex items-center justify-center text-xs font-bold text-luxury-dark hover:bg-luxury-lightGrey border-b border-luxury-grey">+</button>
                <button className="w-8 h-8 flex items-center justify-center text-xs font-bold text-luxury-dark hover:bg-luxury-lightGrey">-</button>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 text-xs text-luxury-darkGrey pt-2 leading-relaxed">
              <FiMapPin className="w-4 h-4 text-luxury-dark flex-shrink-0 mt-0.5" />
              <p className="font-light">
                Showroom Outpost: <strong>Sector 15, Chandigarh, India</strong> (Open by invitation/appointment only). Please message us on WhatsApp to schedule a collection preview.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
