import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import TrendingJerseys from '../components/TrendingJerseys';
import WhyChooseUs from '../components/WhyChooseUs';
import InstagramGallery from '../components/InstagramGallery';

const Home = ({ onQuickView }) => {
  // Ensure we start at the top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-luxury-light min-h-screen"
    >
      {/* Hero Section */}
      <Hero />

      {/* Categories Grid */}
      <Categories />

      {/* Featured Items Grid */}
      <FeaturedProducts onQuickView={onQuickView} />

      {/* Horizontal Trending Sports Jerseys */}
      <TrendingJerseys onQuickView={onQuickView} />

      {/* Why Choose Us Pillars */}
      <WhyChooseUs />

      {/* Instagram Grid Gallery */}
      <InstagramGallery />
    </motion.div>
  );
};

export default Home;
