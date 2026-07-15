import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../components/admin/AdminLayout";
import {
  getProducts,
  deleteProduct,
} from "../services/productService";

function ProductList() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
      setFilteredProducts(data);
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [search, products]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await deleteProduct(id);

      const updatedProducts = products.filter(
        (product) => product.$id !== id
      );

      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-full text-2xl font-semibold">
          Loading Products...
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold">
            Products
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all products in your store
          </p>

        </div>

        <button
          onClick={() => navigate("/admin/add-product")}
          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          + Add Product
        </button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl shadow-md p-5 mb-8">

        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-black"
        />

      </div>

      {/* Products Table */}

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-900 text-white">

            <tr>

              <th className="p-5 text-left">Image</th>
              <th className="text-left">Product</th>
              <th className="text-left">Category</th>
              <th className="text-left">Price</th>
              <th className="text-left">Stock</th>
              <th className="text-center">Actions</th>

            </tr>

          </thead>

          <tbody>
          {filteredProducts.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-16 text-gray-500 text-lg"
                >
                  No products found.
                </td>
              </tr>
            ) : (
              filteredProducts.map((product) => (
                <tr
                  key={product.$id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-5">
                    <img
                      src={product.imageUrls?.[0]}
                      alt={product.name}
                      className="w-20 h-20 rounded-xl object-cover shadow"
                    />
                  </td>

                  <td>
                    <div className="font-semibold text-lg">
                      {product.name}
                    </div>

                    <div className="text-sm text-gray-500">
                      {product.brand || "No Brand"}
                    </div>
                  </td>

                  <td>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm capitalize">
                      {product.category}
                    </span>
                  </td>

                  <td className="font-bold text-lg">
                    ₹{Number(product.price).toLocaleString()}
                  </td>

                  <td>
                    {product.stock > 0 ? (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {product.stock} In Stock
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                        Sold Out
                      </span>
                    )}
                  </td>

                  <td>

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() =>
                          navigate(`/admin/edit/${product.$id}`)
                        }
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(product.$id)
                        }
                        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}

export default ProductList;