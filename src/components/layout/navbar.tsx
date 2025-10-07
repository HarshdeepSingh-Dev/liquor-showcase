// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-[#2d1a0f] via-[#3d2114] to-[#1a130d] py-4 px-10 flex justify-between items-center shadow-lg">
      <div className="flex items-center gap-5">
        {/* Logo */}
        <span className="text-2xl font-serif font-bold text-white tracking-wide">
          Craft Spirits
        </span>
      </div>
      <div className="flex gap-8">
        <Link href="/">
          <span className="text-lg font-semibold text-white hover:text-[#d6b370] transition-all">
            Home
          </span>
        </Link>
        <Link href="/collection">
          <span className="text-lg font-semibold text-white hover:text-[#d6b370] transition-all">
            Collection
          </span>
        </Link>
        <Link href="/heritage">
          <span className="text-lg font-semibold text-white hover:text-[#d6b370] transition-all">
            Heritage
          </span>
        </Link>
        <Link href="/contact">
          <span className="text-lg font-semibold text-white hover:text-[#d6b370] transition-all">
            Contact
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
