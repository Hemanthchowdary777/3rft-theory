import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import curatedRack from '../assets/images/curated_rack.jpg';

const About = () => {
  const { hash } = useLocation();

  // Scroll to hash element if it exists, otherwise to top
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [hash]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-32 pb-24 bg-luxury-light min-h-screen font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="border-b border-luxury-grey pb-8 mb-16">
          <span className="text-[10px] tracking-superwide uppercase text-luxury-darkGrey block mb-2 font-medium">
            Origin & Identity
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-luxury-dark uppercase">
            OUR STORY
          </h1>
        </div>

        {/* Brand Story (Asymmetrical layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-dark uppercase italic">
              "Archiving the classics, subverting the temporary."
            </h2>
            <p className="text-xs text-luxury-darkGrey leading-relaxed font-light">
              Founded under the simple premise that fashion is cyclical, <strong>3RFT THEORY</strong> is a curated archive of streetwear staples and retro sportswear jerseys. The term '3RFT' represents the subversion of standard thrift culture into a luxury editorial practice. 
            </p>
            <p className="text-xs text-luxury-darkGrey leading-relaxed font-light">
              We look past the fast-fashion cycle, scouring local and global vaults to reclaim garments that possess structure, heritage, and character. We do not deal in bulk; we deal in singular releases.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="aspect-[16/10] overflow-hidden bg-luxury-lightGrey">
              <img
                src={curatedRack}
                alt="Vintage fashion curation setup"
                className="w-full h-full object-cover grayscale opacity-90"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-8 md:p-12 bg-luxury-beige border border-luxury-stone">
            <span className="text-[9px] tracking-widest text-luxury-darkGrey font-semibold uppercase block mb-3">
              THE PURPOSE
            </span>
            <h3 className="text-2xl font-serif text-luxury-dark uppercase mb-4">
              OUR MISSION
            </h3>
            <p className="text-xs text-luxury-darkGrey leading-relaxed font-light">
              To extend the lifecycle of premium textiles and design histories. We aim to equip streetwear enthusiasts with authentic, premium garments without relying on modern hyper-production models, making thrift styling a primary pillar of luxury wardrobes.
            </p>
          </div>

          <div className="p-8 md:p-12 bg-luxury-lightGrey border border-luxury-grey">
            <span className="text-[9px] tracking-widest text-luxury-darkGrey font-semibold uppercase block mb-3">
              THE LANDSCAPE
            </span>
            <h3 className="text-2xl font-serif text-luxury-dark uppercase mb-4">
              OUR VISION
            </h3>
            <p className="text-xs text-luxury-darkGrey leading-relaxed font-light">
              We envision a fashion landscape where circularity is status. Through 3RFT THEORY, we seek to cultivate a community that values vintage authenticity, garment weights, and historical significance over temporary retail trends.
            </p>
          </div>
        </div>

        {/* Curation Standards */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-superwide uppercase text-luxury-darkGrey block mb-2 font-medium">
              Vault Inspection
            </span>
            <h2 className="text-3xl font-serif text-luxury-dark uppercase">
              THE CURATION MATRIX
            </h2>
            <div className="w-12 h-[1px] bg-luxury-dark mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center px-4">
              <h4 className="font-serif text-xl text-luxury-dark uppercase mb-2">1. Origin Search</h4>
              <p className="text-xs text-luxury-darkGrey leading-relaxed font-light">
                We trace supply histories to authenticate heritage labels, vintage tags, and manufacture eras.
              </p>
            </div>
            <div className="text-center px-4">
              <h4 className="font-serif text-xl text-luxury-dark uppercase mb-2">2. Restoration</h4>
              <p className="text-xs text-luxury-darkGrey leading-relaxed font-light">
                Every garment is meticulously washed, sanitized, steamed, and depilled before cataloging.
              </p>
            </div>
            <div className="text-center px-4">
              <h4 className="font-serif text-xl text-luxury-dark uppercase mb-2">3. Dimensional Vetting</h4>
              <p className="text-xs text-luxury-darkGrey leading-relaxed font-light">
                Since vintage sizing varies greatly, we inspect, record, and tag each item with precise modern sizing standards.
              </p>
            </div>
          </div>
        </div>

        {/* Policies Section */}
        <div className="border-t border-luxury-grey pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Section Header */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-serif text-luxury-dark uppercase tracking-widest sticky top-28">
              VAULT POLICIES
            </h2>
          </div>

          {/* Right: Policy items */}
          <div className="lg:col-span-8 flex flex-col space-y-12">
            {/* Shipping Policy */}
            <div id="shipping-policy" className="scroll-mt-28">
              <h3 className="text-sm font-semibold tracking-widest text-luxury-dark uppercase mb-4">
                🚚 SHIPPING POLICY
              </h3>
              <div className="text-xs text-luxury-darkGrey space-y-4 font-light leading-relaxed">
                <p>
                  We are pleased to offer <strong>complimentary shipping nationwide</strong> on all orders. There are no minimum spends or promotional codes required.
                </p>
                <p>
                  Once order details are validated via our WhatsApp or Instagram DM checkout, products are dispatched from our catalog within 24 to 48 hours. Tracking details will be shared directly via the chat thread.
                </p>
                <p>
                  Delivery timelines range from 3 to 7 business days, depending on location.
                </p>
              </div>
            </div>

            {/* Return Policy */}
            <div id="return-policy" className="scroll-mt-28 pt-8 border-t border-luxury-lightGrey">
              <h3 className="text-sm font-semibold tracking-widest text-luxury-dark uppercase mb-4">
                🔄 RETURN & EXCHANGE POLICY
              </h3>
              <div className="text-xs text-luxury-darkGrey space-y-4 font-light leading-relaxed">
                <p>
                  Due to the singular, vintage, and archival nature of thrifted apparel, <strong>all sales are final</strong>. We are unable to accept returns, issue refunds, or process exchanges.
                </p>
                <p>
                  Every listing contains detailed measurements, sizing descriptors, and a grading index indicating the item's exact condition (e.g. 9/10). We strongly encourage you to review these parameters prior to placing your order.
                </p>
                <p>
                  If you have any questions regarding the drape, fit, or details of a piece, our support line on WhatsApp and Instagram is open to provide additional close-up photos or measurements before checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
