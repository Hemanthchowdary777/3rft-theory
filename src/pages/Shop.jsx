import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiSliders, FiSearch, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';

const Shop = ({ onQuickView }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Read URL search params
  const categoryParam = searchParams.get('category');
  const filterParam = searchParams.get('filter');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update internal state when URL parameters change
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('All');
    }
    setSelectedSubcategory('All');
  }, [categoryParam]);

  useEffect(() => {
    if (filterParam === 'new') {
      setSortBy('newest');
      // Clear category selection if checking new drops, or keep it. Let's keep it.
    }
  }, [filterParam]);

  // Categories list
  const categories = ['All', 'Men', 'Women', 'Jerseys', 'Accessories'];

  // Dynamic Subcategories mapping based on selected Category
  const subcategoryMap = {
    All: [
      'All', 'Top Wear', 'Bottom Wear', 'T-Shirts', 'Oversized Tees', 
      'Shirts', 'Hoodies', 'Jeans', 'Cargo Pants', 'Football Jerseys', 
      'Basketball Jerseys', 'Cricket Jerseys', 'Accessories'
    ],
    Men: ['All', 'Top Wear', 'Bottom Wear', 'Oversized Tees', 'Hoodies', 'Cargo Pants', 'Jeans'],
    Women: ['All', 'Top Wear', 'Bottom Wear', 'Cargo Pants', 'Jeans', 'Hoodies'],
    Jerseys: ['All', 'Football Jerseys', 'Basketball Jerseys', 'Cricket Jerseys'],
    Accessories: ['All', 'Accessories']
  };

  const subcategories = subcategoryMap[selectedCategory] || ['All'];

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory('All');
    
    // Update search query params
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    searchParams.delete('filter'); // Clear "new" filter if category is selected
    setSearchParams(searchParams);
  };

  // Filter and Sort Logic
  const filteredProducts = products
    .filter((product) => {
      // 1. Search Query
      const query = searchQuery.toLowerCase().trim();
      if (query) {
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesSub = product.subcategory.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesSub) return false;
      }

      // 2. Category
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }

      // 3. Subcategory
      if (selectedSubcategory !== 'All' && product.subcategory !== selectedSubcategory) {
        // Also check if subcategory matches parent categories (e.g. "Top Wear" includes T-shirts, Hoodies, etc.)
        if (selectedSubcategory === 'Top Wear') {
          return ['T-Shirts', 'Oversized Tees', 'Shirts', 'Hoodies', 'Football Jerseys', 'Basketball Jerseys', 'Cricket Jerseys'].includes(product.subcategory);
        }
        if (selectedSubcategory === 'Bottom Wear') {
          return ['Jeans', 'Cargo Pants'].includes(product.subcategory);
        }
        return false;
      }

      // 4. Special Drops (New Drop url parameter)
      if (filterParam === 'new' && !product.newArrival) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') {
        return a.price - b.price;
      }
      if (sortBy === 'price-high') {
        return b.price - a.price;
      }
      if (sortBy === 'newest') {
        // New arrivals first, then by ID
        if (a.newArrival && !b.newArrival) return -1;
        if (!a.newArrival && b.newArrival) return 1;
        return b.id.localeCompare(a.id);
      }
      return 0;
    });

  // Clear all filters
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedSubcategory('All');
    setSortBy('newest');
    setSearchParams({});
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-luxury-light min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Title */}
        <div className="border-b border-luxury-grey pb-8 mb-12">
          <span className="text-[10px] tracking-superwide uppercase text-luxury-darkGrey block mb-2 font-medium">
            3RFT THEORY Archive
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-luxury-dark uppercase">
            THE SHOP
          </h1>
        </div>

        {/* Action Bar (Search & Sort) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-luxury-lightGrey">
          {/* Search Bar */}
          <div className="relative w-full md:max-w-md">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-darkGrey w-4 h-4" />
            <input
              type="text"
              placeholder="Search vintage items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-luxury-lightGrey text-luxury-dark placeholder-luxury-darkGrey/60 text-xs tracking-wide focus:outline-none border border-luxury-grey focus:border-luxury-dark transition-all font-sans"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-luxury-darkGrey hover:text-luxury-dark"
              >
                <FiX className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort & Mobile Filter Toggle */}
          <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="lg:hidden flex items-center space-x-2 px-5 py-3 border border-luxury-grey hover:border-luxury-dark transition-colors text-xs font-sans font-medium tracking-widest uppercase"
            >
              <FiSliders className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>

            {/* Sorting Dropdown */}
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <span className="text-[10px] tracking-widest text-luxury-darkGrey uppercase font-medium hidden sm:inline">
                Sort By:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white border border-luxury-grey text-luxury-dark text-xs font-sans tracking-wide focus:outline-none focus:border-luxury-dark min-w-[160px] cursor-pointer"
              >
                <option value="newest">Newest Drops</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Left Sidebar Filter (Desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            {/* Category Filter */}
            <div className="mb-10">
              <h3 className="text-xs font-semibold tracking-widest text-luxury-dark uppercase mb-5">
                Categories
              </h3>
              <div className="flex flex-col space-y-3 text-xs text-luxury-darkGrey font-light">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`text-left hover:text-luxury-dark transition-colors uppercase tracking-widest ${
                      selectedCategory === cat ? 'font-bold text-luxury-dark' : ''
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Subcategory Filter */}
            <div className="mb-10 pt-8 border-t border-luxury-lightGrey">
              <h3 className="text-xs font-semibold tracking-widest text-luxury-dark uppercase mb-5">
                Sub Categories
              </h3>
              <div className="flex flex-col space-y-3 text-xs text-luxury-darkGrey font-light">
                {subcategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubcategory(sub)}
                    className={`text-left hover:text-luxury-dark transition-colors uppercase tracking-widest ${
                      selectedSubcategory === sub ? 'font-bold text-luxury-dark' : ''
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={handleClearFilters}
              className="w-full py-3 bg-luxury-dark text-luxury-light hover:bg-luxury-beige hover:text-luxury-dark text-xs tracking-widest uppercase font-semibold transition-colors duration-300 border border-luxury-dark"
            >
              Reset Filters
            </button>
          </aside>

          {/* Product Grid Area */}
          <main className="flex-grow">
            {/* Active Filters Display */}
            {(selectedCategory !== 'All' || selectedSubcategory !== 'All' || searchQuery || filterParam === 'new') && (
              <div className="flex flex-wrap items-center gap-2 mb-8 select-none">
                <span className="text-[10px] tracking-widest uppercase text-luxury-darkGrey font-semibold mr-2">
                  Active Filters:
                </span>
                {selectedCategory !== 'All' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-luxury-lightGrey border border-luxury-grey text-luxury-dark text-[10px] tracking-widest uppercase font-medium">
                    Category: {selectedCategory}
                    <button onClick={() => handleCategoryChange('All')} className="hover:opacity-60">
                      <FiX className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedSubcategory !== 'All' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-luxury-lightGrey border border-luxury-grey text-luxury-dark text-[10px] tracking-widest uppercase font-medium">
                    Subcategory: {selectedSubcategory}
                    <button onClick={() => setSelectedSubcategory('All')} className="hover:opacity-60">
                      <FiX className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-luxury-lightGrey border border-luxury-grey text-luxury-dark text-[10px] tracking-widest uppercase font-medium">
                    Search: "{searchQuery}"
                    <button onClick={() => setSearchQuery('')} className="hover:opacity-60">
                      <FiX className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {filterParam === 'new' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-luxury-lightGrey border border-luxury-grey text-luxury-dark text-[10px] tracking-widest uppercase font-medium">
                    New Arrivals Only
                    <button 
                      onClick={() => {
                        searchParams.delete('filter');
                        setSearchParams(searchParams);
                      }} 
                      className="hover:opacity-60"
                    >
                      <FiX className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={handleClearFilters}
                  className="text-[10px] tracking-widest text-luxury-darkGrey hover:text-luxury-dark underline uppercase font-medium ml-2"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Results Count */}
            <p className="text-[10px] tracking-widest uppercase text-luxury-darkGrey font-medium mb-6">
              Showing {filteredProducts.length} unique pieces
            </p>

            {/* Grid */}
            <ProductGrid products={filteredProducts} onQuickView={onQuickView} />
          </main>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <AnimatePresence>
        {isMobileFiltersOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFiltersOpen(false)}
              className="fixed inset-0 bg-black z-50 lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-luxury-light border-l border-luxury-grey z-[60] flex flex-col justify-between p-6 shadow-sm overflow-y-auto lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-luxury-grey mb-8">
                  <h3 className="text-sm font-semibold tracking-widest uppercase text-luxury-dark">
                    Filters
                  </h3>
                  <button
                    onClick={() => setIsMobileFiltersOpen(false)}
                    className="p-1 hover:opacity-60 text-luxury-dark"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                {/* Categories */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold tracking-widest text-luxury-dark uppercase mb-4">
                    Categories
                  </h4>
                  <div className="flex flex-col space-y-2 text-xs text-luxury-darkGrey font-light">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          handleCategoryChange(cat);
                        }}
                        className={`text-left py-1 hover:text-luxury-dark uppercase tracking-widest ${
                          selectedCategory === cat ? 'font-bold text-luxury-dark border-l-2 border-luxury-dark pl-2' : ''
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Subcategories */}
                <div className="mb-8 pt-6 border-t border-luxury-lightGrey">
                  <h4 className="text-xs font-semibold tracking-widest text-luxury-dark uppercase mb-4">
                    Sub Categories
                  </h4>
                  <div className="flex flex-col space-y-2 text-xs text-luxury-darkGrey font-light">
                    {subcategories.map((sub) => (
                      <button
                        key={sub}
                        onClick={() => {
                          setSelectedSubcategory(sub);
                        }}
                        className={`text-left py-1 hover:text-luxury-dark uppercase tracking-widest ${
                          selectedSubcategory === sub ? 'font-bold text-luxury-dark border-l-2 border-luxury-dark pl-2' : ''
                        }`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reset/Apply buttons */}
              <div className="pt-6 border-t border-luxury-lightGrey flex flex-col gap-2">
                <button
                  onClick={handleClearFilters}
                  className="w-full py-3 border border-luxury-grey hover:border-luxury-dark text-xs tracking-widest uppercase font-semibold transition-colors duration-300"
                >
                  Clear Filters
                </button>
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="w-full py-3 bg-luxury-dark text-luxury-light hover:bg-luxury-beige hover:text-luxury-dark border border-luxury-dark text-xs tracking-widest uppercase font-semibold transition-colors duration-300"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
