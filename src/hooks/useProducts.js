import { useState, useEffect } from 'react';
import {
  fetchProducts,
  fetchFeaturedProducts,
  fetchProductBySlug,
  fetchRelatedProducts,
  getCategoryValue,
} from '../data/products';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProducts();
        if (!cancelled) {
          setProducts(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err);
          setProducts([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      cancelled = true;
    };
  }, []);

  return { products, loading, error };
}

export function useFeaturedProducts(limit = 4) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadFeaturedProducts() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchFeaturedProducts(limit);
        if (!cancelled) {
          setProducts(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err);
          setProducts([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadFeaturedProducts();

    return () => {
      cancelled = true;
    };
  }, [limit]);

  return { products, loading, error };
}

export function useProductBySlug(slug) {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadProduct() {
      if (!slug) {
        setProduct(null);
        setRelatedProducts([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const fetchedProduct = await fetchProductBySlug(slug);

        if (cancelled) return;

        setProduct(fetchedProduct);

        if (fetchedProduct) {
          const related = await fetchRelatedProducts(
            getCategoryValue(fetchedProduct.category),
            slug
          );
          if (!cancelled) {
            setRelatedProducts(related);
          }
        } else {
          setRelatedProducts([]);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err);
          setProduct(null);
          setRelatedProducts([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadProduct();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { product, relatedProducts, loading, error };
}
