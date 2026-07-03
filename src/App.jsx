import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Component Imports
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import QuickViewModal from './components/QuickViewModal';

// Page Imports
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll To Top Restoration Utility
const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // If there is a hash (e.g. #shipping-policy), do not reset scroll to top immediately,
    // let the About page handle scrolling to the specific anchor ID.
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
};

function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  // Fade out loader on initial load after 2 seconds
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
    // Don't clear product instantly to allow exit animations to complete
    setTimeout(() => {
      if (!isQuickViewOpen) setQuickViewProduct(null);
    }, 4000);
  };

  return (
    <Router>
      <ScrollToTop />
      
      {/* Entrance Animation Screen */}
      <AnimatePresence>
        {initialLoading && <Loader />}
      </AnimatePresence>

      <div className="flex flex-col min-h-screen bg-white text-luxury-dark selection:bg-luxury-dark selection:text-luxury-light">
        {/* Announcement Header */}
        <AnnouncementBar />

        {/* Global sticky navigation bar */}
        <Navbar />

        {/* Page Content viewport */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home onQuickView={handleOpenQuickView} />} />
              <Route path="/shop" element={<Shop onQuickView={handleOpenQuickView} />} />
              <Route path="/product/:id" element={<ProductDetails onQuickView={handleOpenQuickView} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Global Footer component */}
        <Footer />

        {/* Reusable Quick View Modal Overlay */}
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
