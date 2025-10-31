'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-[#2d1a0f] via-[#3d2114] to-[#1a130d] py-4 px-6 md:px-10 flex justify-between items-center shadow-lg relative z-50">
      {/* Logo */}
      <Image
        src="/images/home-page/brand_logo1.png"
        alt="House of somras"
        width={60}
        height={60}
      />

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8">
        {['Home', 'Collection', 'Heritage', 'Contact'].map((item) => (
          <Link key={item} href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}>
            <span className="text-lg font-semibold text-white hover:text-[#d6b370] transition-all">
              {item}
            </span>
          </Link>
        ))}
      </div>

      {/* Hamburger Icon (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none z-50"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-16 right-4 md:hidden font-semibold bg-gradient-to-r from-[#2d1a0f] via-[#3d2114] to-[#1a130d] rounded-lg shadow-lg px-6 py-4 flex flex-col gap-4"
          >
            {['Home', 'Collection', 'Heritage', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-[#d6b370] transition-all"
              >
                {item}
              </Link>
            ))}

            <Link href="/collection">
              <button className="mt-2 px-6 py-2 rounded-xl bg-transparent border-2 border-white text-white shadow hover:text-[#d6b370] hover:border-[#d6b370] transition-all">
                Explore Collection
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
