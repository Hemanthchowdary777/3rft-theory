import React from 'react';
import { motion } from 'framer-motion';
import { FiTruck, FiShield, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const values = [
  {
    icon: FiTruck,
    title: "FREE SHIPPING",
    desc: "Complimentary shipping on all orders nationwide. From our vault to your door, shipping costs are completely on us—no minimums required."
  },
  {
    icon: FiShield,
    title: "QUALITY CHECKED",
    desc: "Every item undergoes a multi-point quality audit. Fit metrics, garment weathering, and structural tags are meticulously vetted."
  },
  {
    icon: FaWhatsapp,
    title: "EASY WHATSAPP ORDERS",
    desc: "Skip checkout forms. Secure your favorites instantly by initiating a quick text on our dedicated WhatsApp order line."
  },
  {
    icon: FiInstagram,
    title: "INSTAGRAM DM ORDERS",
    desc: "Direct message checkout. Simply send us a screenshot or the product title to process your order directly via Instagram DM."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-luxury-light border-t border-luxury-grey">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-20">
          <span className="text-[10px] tracking-superwide uppercase text-luxury-darkGrey block mb-2 font-medium">
            Our Standard
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-luxury-dark uppercase">
            WHY 3RFT THEORY
          </h2>
          <div className="w-12 h-[1px] bg-luxury-dark mx-auto mt-4" />
        </div>

        {/* Grid of values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {values.map((val, index) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.15 }}
                className="flex flex-col border-t border-luxury-grey pt-8"
              >
                {/* Custom Icon wrapper */}
                <div className="text-luxury-dark mb-5">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                
                <h3 className="font-sans text-xs md:text-sm font-semibold text-luxury-dark tracking-widest uppercase mb-3">
                  {val.title}
                </h3>
                <p className="font-sans text-xs text-luxury-darkGrey leading-relaxed font-light">
                  {val.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
