'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

type ProductType = {
    id: number;
    name: string;
    description: string;
    img: string;
    price: string;
    category: string;
    age: string;
    featured: boolean;
};

const ProductDetails = ({ product, onClose }: { product: ProductType, onClose?: () => void }) => (
    <div onClick={(e) => e.stopPropagation()}>
        <motion.div
            className="relative w-full max-w-4xl pointer-events-none bg-[#1a130d] rounded-3xl shadow-2xl border border-[#d4af37]/30 flex flex-col md:flex-row overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 48 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 48 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Optional Close Button */}
            {onClose && (
                <button
                    className="absolute top-4 right-5 text-[#d4af37] bg-[#110c08]/80 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold z-10 hover:bg-[#d4af37]/10 transition"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ×
                </button>
            )}

            {/* Product Image */}
            <motion.div
                className="flex-1 flex items-center justify-center p-6 md:p-12 bg-[#2d1810]/60 border-r border-[#d4af37]/10"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
                <div className="w-60 h-80 relative rounded-2xl bg-gradient-to-br from-[#d4af37]/10 via-[#1a0f0a]/10 to-[#f4d03f]/10 shadow-xl">
                    <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        style={{ objectFit: "contain" }}
                        className="rounded-2xl"
                        priority
                    />
                </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
                className="flex-1 flex flex-col justify-center p-6 md:p-12"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
                <h3 className="text-sm uppercase tracking-widest text-[#d4af37] font-bold mb-2 border-b border-[#d4af37]/20 pb-0.5">
                    {product.category} &bull; {product.age}
                </h3>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mb-2">
                    {product.name}
                    {product.featured && (
                        <span className="ml-2 px-2 py-0.5 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded text-[#1a130d] text-xs font-bold align-middle">
                            FEATURED
                        </span>
                    )}
                </h2>
                {/* Rating demo: if you wish to keep, adjust as needed or remove */}
                <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#f4d03f] fill-[#f4d03f]" />
                    ))}
                </div>
                {/* Description */}
                <p className="text-[#e5dbcb] font-sans mb-4 text-base md:text-lg leading-relaxed">
                    {product.description}
                </p>
                <div className="flex items-center gap-4 mt-3">
                    <span className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-gradient-to-r from-[#d4af37] to-[#f4d03f] bg-clip-text">
                        {product.price}
                    </span>
                </div>
            </motion.div>
        </motion.div>
    </div>
);

export default ProductDetails;
