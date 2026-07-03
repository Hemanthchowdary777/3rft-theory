import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Local Category Image Imports
import menCategory from '../assets/images/categories/men.jpg';
import womenCategory from '../assets/images/categories/women.jpg';
import jerseysCategory from '../assets/images/categories/jerseys.jpg';
import accessoriesCategory from '../assets/images/categories/accessories.jpg';

const categoriesList = [
  {
    name: 'Men',
    image: menCategory,
    path: '/shop?category=Men',
    span: 'md:col-span-1',
  },
  {
    name: 'Women',
    image: womenCategory,
    path: '/shop?category=Women',
    span: 'md:col-span-1',
  },
  {
    name: 'Jerseys',
    image: jerseysCategory,
    path: '/shop?category=Jerseys',
    span: 'md:col-span-1',
  },
  {
    name: 'Accessories',
    image: accessoriesCategory,
    path: '/shop?category=Accessories',
    span: 'md:col-span-1',
  },
];

const Categories = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-luxury-light">
      <div className="max-w-7xl mx-auto">
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-superwide uppercase text-luxury-darkGrey block mb-2 font-medium">
            Discover the Edit
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-luxury-dark uppercase">
            CURATED ARCHETYPES
          </h2>
          <div className="w-12 h-[1px] bg-luxury-dark mx-auto mt-4" />
        </div>

        {/* Grid of Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {categoriesList.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.15 }}
              className={`relative h-[480px] overflow-hidden group select-none ${cat.span}`}
            >
              <Link to={cat.path} className="block w-full h-full">
                {/* Background Image with Zoom */}
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${cat.image}')` }}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-all duration-500 z-[1]" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 text-white z-10">
                  <h3 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-2">
                    {cat.name}
                  </h3>
                  <span className="text-[10px] tracking-superwide uppercase border-b border-white/50 pb-0.5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                    SHOP NOW
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
