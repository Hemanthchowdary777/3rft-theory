import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { account } from "../../lib/appwrite";

function AdminSidebar() {
  const navigate = useNavigate();

  const logout = async () => {
    await account.deleteSession("current");
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-black text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <div className="w-72 bg-white border-r min-h-screen p-6 shadow-sm">

      <h1 className="text-2xl font-bold mb-10">
        3RFT THEORY
      </h1>

      <nav className="space-y-2">

        <NavLink
          to="/admin/dashboard"
          className={linkClass}
        >
          🏠 Dashboard
        </NavLink>

        <NavLink
          to="/admin/products"
          className={linkClass}
        >
          📦 Products
        </NavLink>

        <NavLink
          to="/admin/add-product"
          className={linkClass}
        >
          ➕ Add Product
        </NavLink>

        <button
          onClick={logout}
          className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 text-red-600 transition"
        >
          🚪 Logout
        </button>

      </nav>

    </div>
  );
}

export default AdminSidebar;