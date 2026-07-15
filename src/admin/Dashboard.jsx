import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../lib/appwrite";
import { getDashboardStats } from "../services/productService";
import AdminLayout from "../components/admin/AdminLayout";

function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    total: 0,
    featured: 0,
    newArrivals: 0,
    soldOut: 0,
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadStats();
  }, []);

  const logout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AdminLayout>

      {/* Header */}

      <div className="flex justify-between items-center mb-10">

        <div>
          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back to 3RFT THEORY Admin
          </p>
        </div>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition"
        >
          Logout
        </button>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

          <p className="text-gray-500">
            Total Products
          </p>

          <h2 className="text-5xl font-bold mt-3">
            {stats.total}
          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

          <p className="text-gray-500">
            Featured Products
          </p>

          <h2 className="text-5xl font-bold mt-3">
            {stats.featured}
          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

          <p className="text-gray-500">
            New Arrivals
          </p>

          <h2 className="text-5xl font-bold mt-3">
            {stats.newArrivals}
          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

          <p className="text-gray-500">
            Sold Out
          </p>

          <h2 className="text-5xl font-bold mt-3">
            {stats.soldOut}
          </h2>

        </div>

      </div>

      {/* Quick Actions */}

      <div className="mt-12">

        <h2 className="text-2xl font-bold mb-6">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div
            onClick={() => navigate("/admin/products")}
            className="bg-white rounded-2xl shadow-md p-8 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition"
          >

            <h2 className="text-2xl font-bold">
              📦 Products
            </h2>

            <p className="text-gray-500 mt-3">
              View, Edit and Delete Products
            </p>

          </div>

          <div
            onClick={() => navigate("/admin/add-product")}
            className="bg-white rounded-2xl shadow-md p-8 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition"
          >

            <h2 className="text-2xl font-bold">
              ➕ Add Product
            </h2>

            <p className="text-gray-500 mt-3">
              Upload New Products
            </p>

          </div>

          <div
            onClick={logout}
            className="bg-white rounded-2xl shadow-md p-8 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition"
          >

            <h2 className="text-2xl font-bold text-red-600">
              🚪 Logout
            </h2>

            <p className="text-gray-500 mt-3">
              Securely Sign Out
            </p>

          </div>

        </div>

      </div>

    </AdminLayout>
  );
}

export default Dashboard;