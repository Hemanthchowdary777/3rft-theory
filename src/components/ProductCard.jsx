import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PLACEHOLDER_IMAGE } from '../lib/imageUrl';

const ProductCard = ({ product, onQuickView }) => {
  const { id, name, price, condition, sizes, images, newArrival, soldOut } = product;
  const [isHovered, setIsHovered] = useState(false);

  // Use second image on hover if available, otherwise fallback to the first
  const displayImage = isHovered && images.length > 1 ? images[1] : images[0];

  return (
    <div 
      className="group relative flex flex-col justify-between w-full h-full text-left"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Wrap */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-luxury-lightGrey mb-4">
        <Link to={`/product/${id}`} className="block w-full h-full">
          <img
            src={displayImage || PLACEHOLDER_IMAGE}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            onError={(event) => {
              event.currentTarget.src = PLACEHOLDER_IMAGE;
            }}
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {newArrival && !soldOut && (
            <span className="bg-luxury-dark text-luxury-light text-[9px] font-sans font-semibold tracking-widest uppercase px-2.5 py-1">
              NEW
            </span>
          )}
          {soldOut && (
            <span className="bg-luxury-darkGrey text-luxury-light text-[9px] font-sans font-semibold tracking-widest uppercase px-2.5 py-1">
              SOLD OUT
            </span>
          )}
          <span className="bg-luxury-light/95 text-luxury-dark text-[9px] font-sans font-medium tracking-widest uppercase px-2 py-0.5 border border-luxury-grey">
            🚚 FREE SHIPPING
          </span>
        </div>

        {/* Condition Badge (Top Right) */}
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="bg-luxury-light/95 text-luxury-dark text-[9px] font-sans font-bold tracking-wider px-2 py-0.5 border border-luxury-grey rounded-sm">
            {condition.split(' - ')[0]}
          </span>
        </div>

        {/* Hover Quick View Trigger */}
        {!soldOut && (
          <div className="absolute inset-0 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onQuickView) onQuickView(product);
              }}
              className="w-full py-3 bg-luxury-light text-luxury-dark text-[10px] tracking-widest uppercase font-semibold border border-luxury-dark hover:bg-luxury-dark hover:text-luxury-light transition-colors duration-300 shadow-sm"
            >
              QUICK VIEW
            </button>
          </div>
        )}
      </div>

      {/* Info Block */}
      <div className="flex flex-col flex-grow select-none">
        <div className="flex items-start justify-between gap-2 mb-1">
          <Link to={`/product/${id}`} className="hover:opacity-60 transition-opacity">
            <h3 className="font-sans text-xs md:text-sm font-medium text-luxury-dark tracking-wide uppercase line-clamp-1">
              {name}
            </h3>
          </Link>
          <span className="font-sans text-xs md:text-sm font-semibold text-luxury-dark">
            ₹{price.toLocaleString('en-IN')}
          </span>
        </div>

        {/* Condition details */}
        <div className="text-[10px] text-luxury-darkGrey tracking-wide mb-2">
          Condition: <span className="font-medium text-luxury-dark">{condition.split(' - ')[0]}</span>
        </div>

        {/* Size listings */}
        <div className="flex items-center space-x-1.5 mt-auto pt-1">
          <span className="text-[9px] text-luxury-darkGrey uppercase tracking-wider">Sizes:</span>
          <div className="flex items-center gap-1">
            {sizes.map((size) => (
              <span 
                key={size} 
                className="text-[9px] font-bold font-sans border border-luxury-grey text-luxury-dark px-1.5 py-0.5 bg-luxury-lightGrey"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
