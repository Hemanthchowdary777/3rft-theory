import React, { useRef } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import ProductCard from './ProductCard';
import { useProducts } from '../hooks/useProducts';

const TrendingJerseys = ({ onQuickView }) => {
  const scrollContainerRef = useRef(null);
  const { products, loading } = useProducts();

  // Filter for jerseys category
  const jerseys = products.filter((p) => p.category === 'Jerseys');

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-luxury-beige">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[10px] tracking-superwide uppercase text-luxury-darkGrey block mb-2 font-medium">
              Vintage Sportswear
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-luxury-dark uppercase">
              TRENDING JERSEYS
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 border border-luxury-dark/20 text-luxury-dark hover:border-luxury-dark hover:bg-luxury-dark hover:text-luxury-light transition-all duration-300 rounded-full"
              aria-label="Scroll Left"
            >
              <FiArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 border border-luxury-dark/20 text-luxury-dark hover:border-luxury-dark hover:bg-luxury-dark hover:text-luxury-light transition-all duration-300 rounded-full"
              aria-label="Scroll Right"
            >
              <FiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Wrapper */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-[10px] tracking-widest uppercase text-luxury-darkGrey font-medium">
              Loading collection...
            </p>
          </div>
        ) : (
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto no-scrollbar gap-6 pb-6 snap-x snap-mandatory scroll-smooth"
          >
            {jerseys.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start"
              >
                <ProductCard product={product} onQuickView={onQuickView} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingJerseys;
