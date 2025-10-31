"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Youtube, Mail } from "lucide-react";

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
  { icon: Mail, href: "mailto:Houseofsomrass@gmail.com" }
];

const Footer = () => (
  <footer className="relative bg-gradient-to-br from-[#0f0806] via-[#1a0f0a] to-[#2d1810] text-[#BE9252] font-serif select-none">
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center gap-12">
      {/* Logo */}
      <motion.div 
        className="flex flex-col items-center space-y-4"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <Image
                src="/images/home-page/brand_logo1.png"
                alt="House of somras"
                width={100}
                height={100}
              />
        <span className="text-lg font-bold tracking-widest uppercase">House of somrass</span>
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
              className="text-[#BE9252] hover:text-[#f4d03f] transition-colors duration-300 text-xl" 
              target="_blank" 
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
