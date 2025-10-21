"use client";
import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Youtube, Twitter } from "lucide-react";

const footerLinks = [
  "Home",
  "The Whisky",
  "Awards",
  "Tasting Notes",
  "Our Story",
  "The Distillery",
  "The Process",
  "Media Articles",
  "Store Locator",
  "Contact"
];

const socialLinks = [
  { icon: Instagram, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Twitter, href: "#" }
];

const Footer = () => (
  <footer className="relative bg-gradient-to-br from-[#0f0806] via-[#1a0f0a] to-[#2d1810] text-[#d4af37] font-serif select-none">
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center gap-12">
      {/* Logo */}
      <motion.div 
        className="flex flex-col items-center space-y-4"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <svg className="w-14 h-14 fill-current" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
          {/* Simplified stylish logo mark */}
          <circle cx="32" cy="32" r="30" stroke="#d4af37" strokeWidth="2" fill="none" />
          <path d="M20 44 L32 20 L44 44 Z" fill="#d4af37" />
        </svg>
        <span className="text-lg font-bold tracking-widest uppercase">Craft Spirits</span>
      </motion.div>

      {/* Social Links */}
      <motion.ul 
        className="flex space-x-8"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {socialLinks.map(({ icon: Icon, href }, i) => (
          <li key={i}>
            <a 
              href={href} 
              aria-label="Social link"
              className="text-[#d4af37] hover:text-[#f4d03f] transition-colors duration-300 text-xl" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Icon />
            </a>
          </li>
        ))}
      </motion.ul>

      {/* Nav Links */}
      <motion.nav 
        className="flex flex-wrap justify-center gap-8 max-w-3xl"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {footerLinks.map((text, i) => (
          <a 
            key={i} 
            href="#" 
            className="text-sm md:text-base hover:text-[#f4d03f] transition-colors duration-300"
          >
            {text}
          </a>
        ))}
      </motion.nav>
    </div>
  </footer>
);

export default Footer;
