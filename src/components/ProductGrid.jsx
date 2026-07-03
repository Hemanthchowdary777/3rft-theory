import React from 'react';
import ProductCard from './ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

const ProductGrid = ({ products, onQuickView }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="font-serif text-xl md:text-2xl text-luxury-darkGrey uppercase tracking-widest">
          No Products Found
        </h3>
        <p className="text-xs text-luxury-darkGrey/60 tracking-wider mt-2 uppercase">
          Try adjusting your filters or search terms.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
      <AnimatePresence mode="popLayout">
        {products.map((product) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full"
          >
            <ProductCard product={product} onQuickView={onQuickView} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ProductGrid;
