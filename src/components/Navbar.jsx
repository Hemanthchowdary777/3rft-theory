import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      // Reset scroll state on load/route change
      handleScroll();
    } else {
      setIsScrolled(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, location.pathname]);

  // Force scrolled state if not on home page
  const navBgClass = !isHomePage || isScrolled
    ? 'bg-luxury-light text-luxury-dark border-b border-luxury-grey'
    : 'bg-transparent text-luxury-dark';

  const logoColorClass = 'text-luxury-dark';

  const menuLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Men', path: '/shop?category=Men' },
    { name: 'Women', path: '/shop?category=Women' },
    { name: 'Jerseys', path: '/shop?category=Jerseys' },
    { name: 'Accessories', path: '/shop?category=Accessories' },
    { name: 'New Drops', path: '/shop?filter=new' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-10 left-0 w-full z-40 transition-all duration-500 ease-in-out ${navBgClass} py-4 md:py-6 px-6 md:px-12`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className={`font-serif text-lg md:text-xl font-bold tracking-superwide uppercase ${logoColorClass} transition-colors duration-500`}>
              3RFT THEORY
            </span>
          </Link>

          {/* Center Navigation (Desktop Only) */}
          <div className="hidden xl:flex items-center space-x-6 text-[11px] font-sans font-medium uppercase tracking-widest">
            {menuLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `hover:opacity-60 transition-opacity duration-300 relative py-1 ${
                    isActive && !link.path.includes('?') ? 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-current' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Side Options */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <a
              href="https://instagram.com/3rft_theory"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
              aria-label="Instagram"
            >
              <FiInstagram className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://wa.me/918357977520"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            
            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden hover:opacity-60 transition-opacity focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FiX className="w-5 h-5 md:w-6 md:h-6" /> : <FiMenu className="w-5 h-5 md:w-6 md:h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 top-[88px] bg-luxury-light z-30 flex flex-col justify-between py-12 px-8 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 text-center text-sm font-sans font-medium uppercase tracking-widest">
              {menuLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="hover:opacity-60 transition-opacity py-2 border-b border-luxury-lightGrey"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col items-center space-y-4">
              <span className="text-[10px] tracking-superwide text-luxury-darkGrey uppercase">
                Orders accepted via Instagram & WhatsApp
              </span>
              <div className="flex space-x-6">
                <a
                  href="https://instagram.com/3rft_theory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs uppercase tracking-widest hover:opacity-60 transition-opacity"
                >
                  <FiInstagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://wa.me/918357977520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs uppercase tracking-widest hover:opacity-60 transition-opacity"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
