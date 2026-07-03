import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-dark text-luxury-light pt-20 pb-10 px-6 md:px-12 border-t border-luxury-charcoal">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1: Brand & Order Statement */}
        <div className="flex flex-col space-y-4">
          <Link to="/" className="inline-block">
            <span className="font-serif text-2xl font-bold tracking-superwide uppercase text-luxury-light">
              3RFT THEORY
            </span>
          </Link>
          <p className="font-sans text-xs text-luxury-darkGrey leading-relaxed font-light max-w-sm">
            Curators of premium vintage apparel, streetwear archetypes, and archival jerseys. 
          </p>
          <div className="pt-2 border-t border-luxury-charcoal">
            <span className="text-[10px] tracking-superwide text-luxury-beige uppercase font-medium">
              ORDERING NOTE
            </span>
            <p className="font-sans text-xs text-luxury-beige/95 mt-1 font-light italic leading-relaxed">
              "Orders are accepted through WhatsApp and Instagram DM."
            </p>
          </div>
        </div>

        {/* Column 2: Categories */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-luxury-light">
            CATEGORIES
          </h3>
          <div className="flex flex-col space-y-2 text-xs text-luxury-darkGrey">
            <Link to="/shop?category=Men" className="hover:text-luxury-light transition-colors">Men's Apparel</Link>
            <Link to="/shop?category=Women" className="hover:text-luxury-light transition-colors">Women's Apparel</Link>
            <Link to="/shop?category=Jerseys" className="hover:text-luxury-light transition-colors">Sport Jerseys</Link>
            <Link to="/shop?category=Accessories" className="hover:text-luxury-light transition-colors">Accessories</Link>
            <Link to="/shop?filter=new" className="hover:text-luxury-light transition-colors">New Arrivals</Link>
          </div>
        </div>

        {/* Column 3: Quick Links & Policies */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-luxury-light">
            INFORMATION
          </h3>
          <div className="flex flex-col space-y-2 text-xs text-luxury-darkGrey">
            <Link to="/about" className="hover:text-luxury-light transition-colors">Our Story</Link>
            <Link to="/contact" className="hover:text-luxury-light transition-colors">Get in Touch</Link>
            <Link to="/about#shipping-policy" className="hover:text-luxury-light transition-colors">Shipping Policy</Link>
            <Link to="/about#return-policy" className="hover:text-luxury-light transition-colors">Return Policy</Link>
          </div>
        </div>

        {/* Column 4: Contact & Socials */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-luxury-light">
            CONNECT DIRECT
          </h3>
          <div className="flex flex-col space-y-3 text-xs text-luxury-darkGrey">
            <p className="font-light">Have questions about dimensions or details? Talk to us:</p>
            <div className="flex items-center space-x-4 pt-1">
              <a
                href="https://instagram.com/3rft_theory"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-luxury-charcoal rounded-full hover:bg-luxury-light hover:text-luxury-dark transition-all duration-300 text-luxury-light"
                aria-label="Instagram"
              >
                <FiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918357977520"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-luxury-charcoal rounded-full hover:bg-luxury-light hover:text-luxury-dark transition-all duration-300 text-luxury-light"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[10px] text-luxury-darkGrey/60 mt-2 font-light">
              Available 10:00 AM - 10:00 PM IST
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-luxury-charcoal flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
        <span className="text-[10px] tracking-widest uppercase text-luxury-darkGrey/80">
          &copy; {currentYear} 3RFT THEORY. ALL RIGHTS RESERVED.
        </span>
        <span className="text-[9px] tracking-widest uppercase text-luxury-darkGrey/50 font-light">
          PREMIUM STREETWEAR & VINTAGE EDIT
        </span>
      </div>
    </footer>
  );
};

export default Footer;
