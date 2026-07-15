import { getProducts } from "../services/productService";

const CATEGORY_LABELS = {
  men: "Men",
  women: "Women",
  jerseys: "Jerseys",
  accessories: "Accessories",
};

const CONDITION_LABELS = {
  new: "10/10 - Brand New",
  "like-new": "9/10 - Like New",
  vintage: "8/10 - Vintage",
};

function inferSubcategory(category, name) {
  const nameLower = (name || "").toLowerCase();

  if (category === "Jerseys") {
    if (nameLower.includes("basketball")) return "Basketball Jerseys";
    if (nameLower.includes("football")) return "Football Jerseys";
    if (nameLower.includes("cricket")) return "Cricket Jerseys";
    return "Football Jerseys";
  }

  if (category === "Accessories") {
    return "Accessories";
  }

  if (category === "Men") {
    if (nameLower.includes("hoodie")) return "Hoodies";
    if (nameLower.includes("tee")) return "Oversized Tees";
    if (nameLower.includes("cargo")) return "Cargo Pants";
    if (nameLower.includes("jeans")) return "Jeans";
    return "Top Wear";
  }

  if (category === "Women") {
    if (nameLower.includes("hoodie")) return "Hoodies";
    if (nameLower.includes("cargo")) return "Cargo Pants";
    if (nameLower.includes("jeans")) return "Jeans";
    return "Top Wear";
  }

  return category;
}

export function transformProduct(product) {
  const category =
    CATEGORY_LABELS[product.category] ||
    product.category ||
    "Accessories";

  return {
    id: product.$id,
    name: product.name,
    category,
    subcategory:
      product.subcategory ||
      inferSubcategory(category, product.name),

    gender:
      category === "Men"
        ? "Men"
        : category === "Women"
        ? "Women"
        : "Unisex",

    price: product.price,
    originalPrice: product.originalPrice,

    brand: product.brand,

    description: product.description,

    condition:
      CONDITION_LABELS[product.condition] ||
      product.condition,

    sizes:
      product.sizes?.length
        ? product.sizes
        : ["One Size"],

    images:
      product.imageUrls?.length
        ? product.imageUrls
        : [],

    featured: Boolean(product.featured),

    newArrival: Boolean(product.newArrival),

    freeShipping: Boolean(product.freeShipping),

    soldOut: Boolean(product.soldOut),

    stock: product.stock,
  };
}
export async function fetchProducts() {
  const products = await getProducts();
  return products.map(transformProduct);
}

export async function fetchFeaturedProducts(limit = 4) {
  const products = await getProducts();

  return products
    .filter((product) => product.featured)
    .slice(0, limit)
    .map(transformProduct);
}

export async function fetchProductBySlug(id) {
  const products = await getProducts();

  const product = products.find(
    (p) => p.$id === id || p.id === id
  );

  return product ? transformProduct(product) : null;
}

export async function fetchRelatedProducts(category, currentId, limit = 4) {
  const products = await getProducts();

  return products
    .filter(
      (product) =>
        product.category === category &&
        product.$id !== currentId
    )
    .slice(0, limit)
    .map(transformProduct);
}

export function getCategoryValue(label) {
  const entry = Object.entries(CATEGORY_LABELS).find(
    ([, value]) => value === label
  );

  return entry ? entry[0] : label?.toLowerCase();
}