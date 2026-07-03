import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiInstagram, FiCornerUpLeft } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductDetails = ({ onQuickView }) => {
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Retrieve current product
  const product = products.find((p) => p.id === id);

  // Scroll to top on mount or product change
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center px-6">
        <h2 className="font-serif text-2xl md:text-3xl text-luxury-dark uppercase tracking-widest mb-4">
          Product Not Found
        </h2>
        <Link 
          to="/shop" 
          className="inline-flex items-center space-x-2 text-xs tracking-widest font-semibold uppercase border-b border-luxury-dark pb-1 hover:opacity-60 transition-opacity"
        >
          <FiCornerUpLeft className="w-4 h-4" />
          <span>Return To Shop</span>
        </Link>
      </div>
    );
  }

  const { name, price, condition, sizes, description, images, category, soldOut, newArrival } = product;

  // Filter related products
  const relatedProducts = products
    .filter((p) => p.category === category && p.id !== id)
    .slice(0, 4);

  // Construct URL-encoded pre-filled WhatsApp message
  const prefilledMessage = `Hi 3RFT THEORY,\n\nI'm interested in purchasing this product.\n\nProduct Name:\n${name}\n\nPrice:\n₹${price.toLocaleString('en-IN')}\n\nPlease let me know if it is available.`;
  const whatsappUrl = `https://wa.me/918357977520?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-32 pb-24 bg-luxury-light min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Link */}
        <Link
          to="/shop"
          className="inline-flex items-center space-x-2 text-[10px] tracking-widest font-semibold uppercase text-luxury-darkGrey hover:text-luxury-dark mb-10 transition-colors"
        >
          <FiCornerUpLeft className="w-3.5 h-3.5" />
          <span>Back to Collection</span>
        </Link>

        {/* Product Details Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          {/* Column 1: Image Gallery (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Display image */}
            <div className="aspect-[3/4] w-full overflow-hidden bg-luxury-lightGrey border border-luxury-lightGrey">
              <img
                src={images[activeImageIndex]}
                alt={`${name} display`}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>

            {/* Thumbnail Selection */}
            {images.length > 1 && (
              <div className="flex gap-3 mt-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative w-20 aspect-[3/4] overflow-hidden bg-luxury-lightGrey border-2 transition-all ${
                      activeImageIndex === index ? 'border-luxury-dark' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${name} thumb ${index}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Column 2: Sticky Info Panel (Span 5) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start flex flex-col space-y-6">
            {/* Badges and tags */}
            <div className="flex flex-wrap items-center gap-2 select-none">
              {newArrival && !soldOut && (
                <span className="bg-luxury-dark text-luxury-light text-[9px] font-sans font-semibold tracking-widest uppercase px-2.5 py-1">
                  NEW ARRIVAL
                </span>
              )}
              {soldOut && (
                <span className="bg-luxury-darkGrey/30 text-luxury-darkGrey text-[9px] font-sans font-semibold tracking-widest uppercase px-2.5 py-1">
                  SOLD OUT
                </span>
              )}
              <span className="bg-luxury-beige text-luxury-dark text-[9px] font-sans font-medium tracking-widest uppercase px-2 py-0.5 border border-luxury-stone">
                🚚 FREE SHIPPING ON THIS ORDER
              </span>
            </div>

            {/* Title & Price */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-luxury-dark uppercase tracking-wide leading-tight mb-2">
                {name}
              </h1>
              <span className="text-xl sm:text-2xl font-semibold text-luxury-dark font-sans">
                ₹{price.toLocaleString('en-IN')}
              </span>
            </div>

            {/* Condition Detail */}
            <div className="py-3 border-t border-b border-luxury-lightGrey">
              <span className="text-[10px] tracking-superwide text-luxury-darkGrey uppercase font-medium block mb-1">
                CONDITION INDEX
              </span>
              <p className="text-xs font-sans text-luxury-dark font-medium uppercase tracking-wide">
                {condition}
              </p>
            </div>

            {/* Sizes */}
            <div>
              <span className="text-[10px] tracking-superwide text-luxury-darkGrey uppercase font-medium block mb-3">
                AVAILABLE SIZES
              </span>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <span
                    key={size}
                    className="flex items-center justify-center min-w-[48px] h-10 border border-luxury-dark text-xs font-bold text-luxury-dark select-none px-2 font-sans bg-luxury-lightGrey"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <span className="text-[10px] tracking-superwide text-luxury-darkGrey uppercase font-medium block mb-2">
                DESCRIPTION
              </span>
              <p className="text-xs font-sans text-luxury-darkGrey leading-relaxed font-light">
                {description}
              </p>
            </div>

            {/* CTA Order Section */}
            {!soldOut ? (
              <div className="flex flex-col gap-3 pt-6 border-t border-luxury-lightGrey">
                {/* Order on WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full py-4 bg-luxury-dark hover:bg-luxury-charcoal text-luxury-light font-sans text-xs tracking-widest font-semibold uppercase transition-colors shadow-sm"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>ORDER ON WHATSAPP</span>
                </a>

                {/* Order on Instagram */}
                <a
                  href="https://instagram.com/3rft_theory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full py-4 bg-luxury-dark hover:bg-luxury-beige hover:text-luxury-dark text-luxury-light font-sans text-xs tracking-widest font-semibold uppercase transition-colors border border-luxury-dark shadow-sm"
                >
                  <FiInstagram className="w-4 h-4" />
                  <span>ORDER ON INSTAGRAM</span>
                </a>

                {/* Instagram ordering note */}
                <div className="p-4 bg-luxury-lightGrey border border-luxury-grey mt-2">
                  <span className="text-[9px] tracking-widest uppercase font-bold text-luxury-dark block mb-1">
                    Instagram DM Checkout:
                  </span>
                  <p className="text-[10px] text-luxury-darkGrey font-light leading-relaxed">
                    To place an order on Instagram, simply click the button above and send us a direct message with the product name or a screenshot.
                  </p>
                </div>
              </div>
            ) : (
              <div className="pt-6 border-t border-luxury-lightGrey text-center">
                <span className="text-xs font-sans font-semibold tracking-widest text-luxury-darkGrey uppercase">
                  This piece has been sold
                </span>
                <p className="text-[10px] text-luxury-darkGrey/60 mt-1 uppercase font-light">
                  Follow us on Instagram to catch the next drop first.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-luxury-grey">
            <h2 className="text-2xl font-serif text-luxury-dark uppercase tracking-widest mb-10 text-center">
              YOU MAY ALSO LIKE
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} onQuickView={onQuickView} />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductDetails;
