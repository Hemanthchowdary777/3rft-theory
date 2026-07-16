import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getProduct,
  updateProduct,
} from "../services/productService";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const subcategories = {
    Men: [
      "Top Wear",
      "Bottom Wear",
      "Oversized Tees",
      "Hoodies",
      "Cargo Pants",
      "Jeans",
    ],

    Women: [
      "Top Wear",
      "Bottom Wear",
      "Cargo Pants",
      "Jeans",
      "Hoodies",
    ],

    Jerseys: [
      "Football Jerseys",
      "Basketball Jerseys",
      "Cricket Jerseys",
    ],

    Accessories: [
      "Caps",
      "Bags",
      "Belts",
      "Chains",
      "Watches",
      "Wallets",
    ],
  };

  const [loading, setLoading] = useState(true);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    originalPrice: "",
    brand: "",
    category: "Men",
    subcategory: "",
    description: "",
    stock: 1,
    condition: "new",
    featured: false,
    newArrival: false,
    freeShipping: true,
    sizes: [],
  });

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getProduct(id);

        setProduct({
          name: data.name || "",
          price: data.price || "",
          originalPrice: data.originalPrice || "",
          brand: data.brand || "",
          category: data.category || "Men",
          subcategory: data.subcategory || "",
          description: data.description || "",
          stock: data.stock || 1,
          condition: data.condition || "new",
          featured: data.featured || false,
          newArrival: data.newArrival || false,
          freeShipping: data.freeShipping ?? true,
          sizes: data.sizes || [],
        });
      } catch (err) {
        console.error(err);
        alert(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (name === "category") {
      setProduct((prev) => ({
        ...prev,
        category: value,
        subcategory: "",
      }));
      return;
    }

    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSizes = (size) => {
    setProduct((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  const handleSubmit = async () => {
    try {
      await updateProduct(id, {
        ...product,
        price: Number(product.price),
        originalPrice: product.originalPrice
          ? Number(product.originalPrice)
          : null,
        stock: Number(product.stock),
        soldOut: Number(product.stock) <= 0,
      });

      alert("✅ Product Updated Successfully!");

      navigate("/admin/products");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-3xl font-bold mb-8">
          Edit Product
        </h1>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <label className="font-semibold">
              Product Name
            </label>

            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">
              Brand
            </label>

            <input
              type="text"
              name="brand"
              value={product.brand}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">
              Original Price
            </label>

            <input
              type="number"
              name="originalPrice"
              value={product.originalPrice}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-2"
            />
          </div>
          <div>
            <label className="font-semibold">
              Category
            </label>

            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-2"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Jerseys">Jerseys</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">
              Subcategory
            </label>

            <select
              name="subcategory"
              value={product.subcategory}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-2"
            >
              <option value="">Select Subcategory</option>

              {subcategories[product.category].map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-2">
            <label className="font-semibold">
              Description
            </label>

            <textarea
              rows="4"
              name="description"
              value={product.description}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">
              Stock
            </label>

            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">
              Condition
            </label>

            <select
              name="condition"
              value={product.condition}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-2"
            >
              <option value="new">Brand New</option>
              <option value="like-new">Like New</option>
              <option value="vintage">Vintage</option>
            </select>
          </div>

          <div className="col-span-2">

            <label className="font-semibold">
              Sizes
            </label>

            <div className="flex gap-3 mt-3">

              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => handleSizes(size)}
                  className={`border rounded px-4 py-2 ${
                    product.sizes.includes(size)
                      ? "bg-black text-white"
                      : ""
                  }`}
                >
                  {size}
                </button>
              ))}

            </div>

          </div>
          <div className="col-span-2 flex gap-8">

<label>
  <input
    type="checkbox"
    name="featured"
    checked={product.featured}
    onChange={handleChange}
  />

  <span className="ml-2">
    Featured
  </span>
</label>

<label>
  <input
    type="checkbox"
    name="newArrival"
    checked={product.newArrival}
    onChange={handleChange}
  />

  <span className="ml-2">
    New Arrival
  </span>
</label>

<label>
  <input
    type="checkbox"
    name="freeShipping"
    checked={product.freeShipping}
    onChange={handleChange}
  />

  <span className="ml-2">
    Free Shipping
  </span>
</label>

</div>

<div className="col-span-2 flex gap-4">

<button
  onClick={handleSubmit}
  className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800"
>
  Save Changes
</button>

<button
  onClick={() => navigate("/admin/products")}
  className="bg-gray-500 text-white px-8 py-3 rounded-lg hover:bg-gray-600"
>
  Cancel
</button>

</div>

</div>

</div>
</div>
);
}

export default EditProduct;