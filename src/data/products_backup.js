import { sanityClient } from "../lib/sanityClient";
import { getProductImageUrls } from '../lib/imageUrl';

const PRODUCT_PROJECTION = `{
  _id,
  name,
  "slug": slug.current,
  price,
  originalPrice,
  brand,
  category,
  description,
  images,
  sizes,
  featured,
  newArrival,
  freeShipping,
  condition,
  stock
}`;

const CATEGORY_LABELS = {
  men: 'Men',
  women: 'Women',
  jerseys: 'Jerseys',
  accessories: 'Accessories',
};

const CONDITION_LABELS = {
  new: '10/10 - Brand New',
  'like-new': '9/10 - Like New',
  vintage: '8/10 - Vintage',
};

function inferSubcategory(category, name) {
  const nameLower = name.toLowerCase();

  if (category === 'Jerseys') {
    if (nameLower.includes('basketball') || nameLower.includes('bulls')) {
      return 'Basketball Jerseys';
    }
    if (nameLower.includes('football') || nameLower.includes('manchester')) {
      return 'Football Jerseys';
    }
    if (nameLower.includes('cricket') || nameLower.includes('india')) {
      return 'Cricket Jerseys';
    }
    return 'Football Jerseys';
  }

  if (category === 'Accessories') {
    return 'Accessories';
  }

  if (category === 'Men') {
    if (nameLower.includes('hoodie')) return 'Hoodies';
    if (nameLower.includes('tee') || nameLower.includes('t-shirt')) return 'Oversized Tees';
    if (nameLower.includes('cargo') || nameLower.includes('pants')) return 'Cargo Pants';
    if (nameLower.includes('jeans')) return 'Jeans';
    return 'Top Wear';
  }

  if (category === 'Women') {
    if (nameLower.includes('cargo')) return 'Cargo Pants';
    if (nameLower.includes('jeans')) return 'Jeans';
    if (nameLower.includes('hoodie')) return 'Hoodies';
    return 'Top Wear';
  }

  return category;
}

export function transformProduct(doc) {
  const category = CATEGORY_LABELS[doc.category] || doc.category || 'Accessories';
  const name = doc.name || 'Untitled Product';

  return {
    id: doc.slug || doc._id,
    name,
    category,
    subcategory: inferSubcategory(category, name),
    gender: category === 'Men' ? 'Men' : category === 'Women' ? 'Women' : 'Unisex',
    price: doc.price ?? 0,
    originalPrice: doc.originalPrice,
    brand: doc.brand,
    condition: CONDITION_LABELS[doc.condition] || doc.condition || '10/10 - Brand New',
    sizes: doc.sizes?.length ? doc.sizes : ['One Size'],
    description: doc.description || '',
    images: getProductImageUrls(doc.images),
    featured: Boolean(doc.featured),
    newArrival: Boolean(doc.newArrival),
    freeShipping: doc.freeShipping !== false,
    soldOut: (doc.stock ?? 1) <= 0,
    stock: doc.stock ?? 1,
  };
}

export async function fetchProducts() {
  const query = `*[_type == "product"] | order(_createdAt desc) ${PRODUCT_PROJECTION}`;
  const docs = await sanityClient.fetch(query);
  return docs.map(transformProduct);
}

export async function fetchFeaturedProducts(limit = 4) {
  const query = `*[_type == "product" && featured == true] | order(_createdAt desc) [0...${limit}] ${PRODUCT_PROJECTION}`;
  const docs = await sanityClient.fetch(query);
  return docs.map(transformProduct);
}

export async function fetchProductBySlug(slug) {
  const query = `*[_type == "product" && slug.current == $slug][0] ${PRODUCT_PROJECTION}`;
  const doc = await sanityClient.fetch(query, { slug });
  return doc ? transformProduct(doc) : null;
}

export async function fetchRelatedProducts(categoryValue, slug, limit = 4) {
  const query = `*[_type == "product" && category == $category && slug.current != $slug] | order(_createdAt desc) [0...${limit}] ${PRODUCT_PROJECTION}`;
  const docs = await sanityClient.fetch(query, { category: categoryValue, slug });
  return docs.map(transformProduct);
}

export function getCategoryValue(label) {
  const entry = Object.entries(CATEGORY_LABELS).find(([, value]) => value === label);
  return entry ? entry[0] : label?.toLowerCase();
}
