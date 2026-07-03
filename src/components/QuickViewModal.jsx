import React, { useEffect } from 'react';
import { FiX, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const QuickViewModal = ({ product, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!product) return null;

  const { name, price, condition, sizes, description, images } = product;

  // WhatsApp prefilled message
  const prefilledMessage = `Hi 3RFT THEORY,\n\nI'm interested in purchasing this product (via Quick View).\n\nProduct Name:\n${name}\n\nPrice:\n₹${price.toLocaleString('en-IN')}\n\nPlease let me know if it is available.`;
  const whatsappUrl = `https://wa.me/918357977520?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white w-full max-w-4xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row border border-luxury-stone"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 text-luxury-dark hover:opacity-60 bg-white/80 backdrop-blur-sm rounded-full transition-all border border-luxury-grey"
              aria-label="Close Modal"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Left: Product Image */}
            <div className="md:w-1/2 aspect-[3/4] md:aspect-auto bg-luxury-lightGrey">
              <img
                src={images[0]}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Product Details */}
            <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
              {/* Badges & Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="bg-luxury-dark text-luxury-light text-[9px] font-sans font-semibold tracking-widest uppercase px-2.5 py-1">
                    QUICK PREVIEW
                  </span>
                  <span className="bg-luxury-light text-luxury-dark text-[9px] font-sans font-semibold tracking-widest uppercase px-2.5 py-1 border border-luxury-grey">
                    🚚 FREE SHIPPING
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif text-luxury-dark uppercase tracking-wide leading-tight mb-2">
                    {name}
                  </h2>
                  <span className="text-lg font-semibold text-luxury-dark font-sans">
                    ₹{price.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="py-2 border-t border-b border-luxury-lightGrey">
                  <span className="text-[9px] tracking-superwide text-luxury-darkGrey uppercase font-medium block">
                    CONDITION
                  </span>
                  <p className="text-xs font-sans text-luxury-dark font-semibold uppercase">
                    {condition.split(' - ')[0]}
                  </p>
                </div>

                {/* Description snippet */}
                <div>
                  <p className="text-[11px] font-sans text-luxury-darkGrey leading-relaxed font-light line-clamp-3">
                    {description}
                  </p>
                </div>

                {/* Sizing selection */}
                <div>
                  <span className="text-[9px] tracking-superwide text-luxury-darkGrey uppercase font-medium block mb-2">
                    AVAILABLE SIZES
                  </span>
                  <div className="flex gap-1.5">
                    {sizes.map((size) => (
                      <span
                        key={size}
                        className="flex items-center justify-center min-w-[36px] h-8 border border-luxury-dark text-[10px] font-bold text-luxury-dark px-1.5 font-sans bg-luxury-lightGrey"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 pt-4 border-t border-luxury-lightGrey">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-luxury-dark hover:bg-luxury-charcoal text-luxury-light font-sans text-[10px] tracking-widest font-semibold uppercase transition-colors"
                >
                  <FaWhatsapp className="w-3.5 h-3.5" />
                  <span>ORDER VIA WHATSAPP</span>
                </a>
                <a
                  href="https://instagram.com/3rft_theory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 border border-luxury-dark text-luxury-dark hover:bg-luxury-dark hover:text-luxury-light font-sans text-[10px] tracking-widest font-semibold uppercase transition-all"
                >
                  <FiInstagram className="w-3.5 h-3.5" />
                  <span>DM ON INSTAGRAM</span>
                </a>
                
                <button
                  onClick={onClose}
                  className="text-[9px] text-center text-luxury-darkGrey hover:text-luxury-dark uppercase tracking-widest underline pt-1 font-semibold"
                >
                  Close & View Details
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuickViewModal;
