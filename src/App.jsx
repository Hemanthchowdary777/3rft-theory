import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import QuickViewModal from "./components/QuickViewModal";

// Website Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Admin Pages
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import AddProduct from "./admin/AddProduct";
import ProductList from "./admin/ProductList";
import EditProduct from "./admin/EditProduct";
import TestAppwrite from "./admin/TestAppwrite";
import ProtectedRoute from "./admin/ProtectedRoute";

// Scroll To Top
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);

    setTimeout(() => {
      setQuickViewProduct(null);
    }, 400);
  };

  return (
    <Router>
      <ScrollToTop />

      <AnimatePresence>
        {initialLoading && <Loader />}
      </AnimatePresence>

      <div className="flex flex-col min-h-screen bg-white text-luxury-dark selection:bg-luxury-dark selection:text-luxury-light">

        <AnnouncementBar />

        <Navbar />

        <main className="flex-grow">
          <Routes>

            {/* Website */}

            <Route
              path="/"
              element={<Home onQuickView={handleOpenQuickView} />}
            />

            <Route
              path="/shop"
              element={<Shop onQuickView={handleOpenQuickView} />}
            />

            <Route
              path="/product/:id"
              element={<ProductDetails onQuickView={handleOpenQuickView} />}
            />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            {/* Login */}

            <Route path="/login" element={<Login />} />

            {/* Protected Admin Routes */}

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/add-product"
              element={
                <ProtectedRoute>
                  <AddProduct />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/products"
              element={
                <ProtectedRoute>
                  <ProductList />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/edit/:id"
              element={
                <ProtectedRoute>
                  <EditProduct />
                </ProtectedRoute>
              }
            />

            {/* Test */}

            <Route
              path="/test"
              element={<TestAppwrite />}
            />

          </Routes>
        </main>

        <Footer />

        <QuickViewModal
          product={quickViewProduct}
          isOpen={isQuickViewOpen}
          onClose={handleCloseQuickView}
        />

      </div>
    </Router>
  );
}

export default App;