// Local Product Image Imports
import bulls1 from '../assets/images/jerseys/bulls_1.jpg';
import bulls2 from '../assets/images/jerseys/bulls_2.jpg';
import charcoalTee1 from '../assets/images/products/charcoal_tee_1.jpg';
import charcoalTee2 from '../assets/images/products/charcoal_tee_2.jpg';
import manutd1 from '../assets/images/jerseys/manutd_1.jpg';
import manutd2 from '../assets/images/jerseys/manutd_2.jpg';
import cargoPants1 from '../assets/images/products/cargo_pants_1.jpg';
import cargoPants2 from '../assets/images/products/cargo_pants_2.jpg';
import sandHoodie1 from '../assets/images/products/sand_hoodie_1.jpg';
import sandHoodie2 from '../assets/images/products/sand_hoodie_2.jpg';
import carharttPants1 from '../assets/images/products/carhartt_pants_1.jpg';
import carharttPants2 from '../assets/images/products/carhartt_pants_2.jpg';
import indiaCricket1 from '../assets/images/jerseys/india_cricket_1.jpg';
import indiaCricket2 from '../assets/images/jerseys/india_cricket_2.jpg';
import sterlingRings1 from '../assets/images/products/sterling_rings_1.jpg';
import sterlingRings2 from '../assets/images/products/sterling_rings_2.jpg';
import denimJacket1 from '../assets/images/products/denim_jacket_1.jpg';
import denimJacket2 from '../assets/images/products/denim_jacket_2.jpg';
import beanie1 from '../assets/images/products/beanie_1.jpg';
import beanie2 from '../assets/images/products/beanie_2.jpg';

export const products = [
  {
    id: "prod-001",
    name: "Vintage 1996 Champion Chicago Bulls Jersey",
    category: "Jerseys",
    subcategory: "Basketball Jerseys",
    gender: "Unisex",
    price: 3499,
    condition: "9/10 - Excellent condition, no cracks in print",
    sizes: ["L", "XL"],
    description: "Authentic Champion replica from the 1995-96 legendary Bulls season. High-quality print detailing, screen printed player numbers, classic mesh construction. Fully sanitised and ready to wear.",
    images: [bulls1, bulls2],
    featured: true,
    newArrival: true,
    soldOut: false
  },
  {
    id: "prod-002",
    name: "Oversized Heavyweight Washed Tee - Charcoal",
    category: "Men",
    subcategory: "Oversized Tees",
    gender: "Men",
    price: 1499,
    condition: "10/10 - Brand New",
    sizes: ["S", "M", "L", "XL"],
    description: "Crafted from 300GSM luxury long-staple cotton. Pre-shrunk, vintage pigment-washed charcoal finish. Ribbed collar with drop shoulder profile for the ultimate luxury streetwear silhouette.",
    images: [charcoalTee1, charcoalTee2],
    featured: true,
    newArrival: true,
    soldOut: false
  },
  {
    id: "prod-003",
    name: "Retro 1994 Manchester United Football Jersey",
    category: "Jerseys",
    subcategory: "Football Jerseys",
    gender: "Unisex",
    price: 3899,
    condition: "8.5/10 - Great vintage wear, slight collar fading",
    sizes: ["M", "L"],
    description: "Original retro football kit featuring iconic Sharp sponsorship. Collared jersey design, sublimated fabric pattern, embroidered club crest and brand logo. Classic vintage streetwear staple.",
    images: [manutd1, manutd2],
    featured: true,
    newArrival: false,
    soldOut: false
  },
  {
    id: "prod-004",
    name: "Women's Cropped Cargo Pants - Stone Beige",
    category: "Women",
    subcategory: "Cargo Pants",
    gender: "Women",
    price: 2199,
    condition: "9.5/10 - Mint condition",
    sizes: ["XS", "S", "M"],
    description: "Relaxed fit cargo pants constructed from premium stone-washed cotton twill. Features utility pocket configurations, adjustable ankle drawstrings, and comfortable elasticated rear waist.",
    images: [cargoPants1, cargoPants2],
    featured: true,
    newArrival: true,
    soldOut: false
  },
  {
    id: "prod-005",
    name: "Classic Heavyweight Boxy Hoodie - Sand",
    category: "Men",
    subcategory: "Hoodies",
    gender: "Unisex",
    price: 2899,
    condition: "9/10 - Thick material, no signs of wear",
    sizes: ["M", "L", "XL"],
    description: "Inspired by luxury lounge collections. 450GSM loopback French terry cotton. Boxy cut, no drawstrings, double-layered hood. Keeps its shape perfectly for a premium structure.",
    images: [sandHoodie1, sandHoodie2],
    featured: false,
    newArrival: false,
    soldOut: true
  },
  {
    id: "prod-006",
    name: "Vintage Carhartt Canvas Work Pants - Mustard",
    category: "Men",
    subcategory: "Cargo Pants",
    gender: "Men",
    price: 2999,
    condition: "8/10 - Beautiful natural distress on pocket corners",
    sizes: ["32", "34"],
    description: "Authentic double-knee vintage Carhartt workwear pants. Relic canvas texture with double stitch seams, hammer loop, and utility tool pockets. Relaxed straight leg silhouette.",
    images: [carharttPants1, carharttPants2],
    featured: false,
    newArrival: false,
    soldOut: false
  },
  {
    id: "prod-007",
    name: "Retro 2003 India Cricket ODI Jersey",
    category: "Jerseys",
    subcategory: "Cricket Jerseys",
    gender: "Unisex",
    price: 3299,
    condition: "9/10 - Collectors piece, excellent condition",
    sizes: ["M", "L", "XL"],
    description: "The iconic 2003 World Cup edition Indian Cricket Team jersey. Vibrant blue mesh panels with diagonal tri-color highlights across the torso. Highly sought-after retro sportswear piece.",
    images: [indiaCricket1, indiaCricket2],
    featured: false,
    newArrival: true,
    soldOut: false
  },
  {
    id: "prod-008",
    name: "Sterling Silver Minimalist Band Set",
    category: "Accessories",
    subcategory: "Accessories",
    gender: "Unisex",
    price: 1199,
    condition: "10/10 - Brand New",
    sizes: ["One Size"],
    description: "Set of three minimal, solid .925 sterling silver rings. Handcrafted with a clean polished texture. Highly durable, water-resistant, and perfect for subtle streetwear layering.",
    images: [sterlingRings1, sterlingRings2],
    featured: true,
    newArrival: false,
    soldOut: false
  },
  {
    id: "prod-009",
    name: "Premium Distressed Denim Jacket - Vintage Blue",
    category: "Women",
    subcategory: "Top Wear",
    gender: "Women",
    price: 2499,
    condition: "9/10 - Great vintage wash",
    sizes: ["S", "M"],
    description: "Classic mid-blue wash denim jacket with light fringe distressing around cuffs and lower hem. Heavy duty brass buttons and standard double breast pockets. Relaxed, slightly cropped fit.",
    images: [denimJacket1, denimJacket2],
    featured: false,
    newArrival: false,
    soldOut: false
  },
  {
    id: "prod-010",
    name: "Classic Ribbed Knit Beanie - Stone Grey",
    category: "Accessories",
    subcategory: "Accessories",
    gender: "Unisex",
    price: 899,
    condition: "10/10 - Brand New",
    sizes: ["One Size"],
    description: "Warm double-layered rib-knit beanie with turn-up cuff. Constructed from breathable, ultra-soft acrylic yarn that offers stretch and shape-retention. Perfect minimal accessory for cold weather.",
    images: [beanie1, beanie2],
    featured: false,
    newArrival: false,
    soldOut: false
  }
];
