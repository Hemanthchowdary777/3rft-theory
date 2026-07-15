import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from './ProductGrid';
import { useFeaturedProducts } from '../hooks/useProducts';

const FeaturedProducts = ({ onQuickView }) => {
  const { products: featuredItems, loading } = useFeaturedProducts(4);

  return (
    <section className="py-24 px-6 md:px-12 bg-luxury-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-luxury-grey pb-8">
          <div>
            <span className="text-[10px] tracking-superwide uppercase text-luxury-darkGrey block mb-2 font-medium">
              New Season Archive
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-luxury-dark uppercase">
              LATEST DROPS
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-[11px] font-sans font-semibold tracking-widest uppercase hover:opacity-60 transition-opacity whitespace-nowrap self-start md:self-auto border-b border-luxury-dark pb-1"
          >
            DISCOVER ALL PRODUCTS &rarr;
          </Link>
        </div>

        {/* Featured Grid */}
        {loading ? (
          <div className="text-center py-20">
            <p className="text-[10px] tracking-widest uppercase text-luxury-darkGrey font-medium">
              Loading collection...
            </p>
          </div>
        ) : (
          <ProductGrid products={featuredItems} onQuickView={onQuickView} />
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
