"use client";
import { easeOut, motion } from "framer-motion";
import { Wine, Shield, Scale } from 'lucide-react';

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: easeOut } },
};

const ResponsibleDrinkingSection = () => (
  <section className="relative w-full py-16 bg-gradient-to-r from-[#0f0806] via-[#1a0f0a] to-[#2d1810] overflow-hidden">
    {/* Subtle luxury gradient accent */}
    <motion.div
      className="absolute -top-16 -right-24 w-[350px] h-[330px] bg-gradient-to-bl from-[#BE9252]/20 via-[#bfa145]/10 to-transparent rounded-full blur-3xl z-0"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 0.18, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    />

    <div className="relative z-10 container mx-auto px-4 md:px-20">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={variants}
      >
        <span className="text-[#BE9252] text-xs font-semibold tracking-[0.25em] uppercase border border-[#BE9252]/30 px-5 py-1.5 rounded-full inline-block mb-4">
          Please Enjoy Responsibly
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#f5f0e8] mb-4">
          The Luxury of <span className="bg-gradient-to-r text-[#BE9252]">Responsibility</span>
        </h2>
        <p className="text-[#d0c4b6] text-lg max-w-2xl mx-auto font-medium">
          Our craft reflects care and heritage. We invite you to savor our spirits with the same respect—for yourself, your company, and your community.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={variants}
      >
        <div className="flex flex-col items-center text-center">
          <Wine className="text-[#BE9252] w-14 h-14 mb-3" />
          <h4 className="text-lg font-semibold text-[#f5f0e8] mb-2">Savor, Don&apos;t Overindulge</h4>
          <p className="text-[#b8a690] text-sm max-w-xs">
            Enjoy the artistry of premium spirits, but always know your limit and take pride in moderation.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Shield className="text-[#BE9252] w-14 h-14 mb-3" />
          <h4 className="text-lg font-semibold text-[#f5f0e8] mb-2">Never Drink & Drive</h4>
          <p className="text-[#b8a690] text-sm max-w-xs">
            Ensure everyone gets home safe. Choose a designated driver or trusted ride for every celebration.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Scale className="text-[#BE9252] w-14 h-14 mb-3" />
          <h4 className="text-lg font-semibold text-[#f5f0e8] mb-2">Legal Drinking Age Only</h4>
          <p className="text-[#b8a690] text-sm max-w-xs">
            Our products are intended only for those above the legal drinking age in their locality.
          </p>
        </div>
      </motion.div>

      {/* Footer message */}
      <motion.p
        className="mt-12 text-center text-base md:text-lg text-[#BE9252] font-serif font-medium tracking-wide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        Celebrate Heritage. Cherish Moments. Always Drink Responsibly.
      </motion.p>
    </div>
  </section>
);

export default ResponsibleDrinkingSection;
