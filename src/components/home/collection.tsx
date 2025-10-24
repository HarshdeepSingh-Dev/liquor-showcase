"use client";
import { easeOut, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const products = [
    {
        id: 1,
        name: "Golden Reserve Whisky",
        description: "Smoky, rich, and aged to perfection.",
        img: "/images/home-page/product.png",
        price: "₹8,500",
        category: "Premium Whisky",
        age: "18 Years",
        featured: true
    },
    {
        id: 2,
        name: "Noble Oak Rum",
        description: "Caramel notes with a spicy finish.",
        img: "/images/home-page/product.png",
        price: "₹6,200",
        category: "Aged Rum",
        age: "12 Years",
        featured: false
    },
    {
        id: 3,
        name: "Heritage Vintage Brandy",
        description: "Smooth, bold flavors and classic aroma.",
        img: "/images/home-page/product.png",
        price: "₹12,000",
        category: "Premium Brandy",
        age: "25 Years",
        featured: true
    },
    {
        id: 4,
        name: "Artisan Craft Gin",
        description: "Botanically infused with Indian spices.",
        img: "/images/home-page/product.png",
        price: "₹4,800",
        category: "Craft Gin",
        age: "Small Batch",
        featured: false
    },
    {
        id: 5,
        name: "Royal Single Malt",
        description: "Exceptional complexity and finish.",
        img: "/images/home-page/product.png",
        price: "₹15,500",
        category: "Single Malt",
        age: "21 Years",
        featured: true
    },
    {
        id: 6,
        name: "Master's Reserve Vodka",
        description: "Crystal clear purity and smoothness.",
        img: "/images/home-page/product.png",
        price: "₹5,500",
        category: "Premium Vodka",
        age: "Triple Filtered",
        featured: false
    }
];

const SignatureCollection = () => {
    const [filter, setFilter] = useState('all');
    const [mounted, setMounted] = useState(false);

    // Trigger animations on component mount
    useEffect(() => {
        setMounted(true);
    }, []);

    const categories = ['all', 'Premium Whisky', 'Aged Rum', 'Premium Brandy', 'Craft Gin', 'Single Malt', 'Premium Vodka'];

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(product => product.category === filter);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5 // Start after hero section settles
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.8, ease: easeOut }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.8 + (0.1 * i), // Start after header animations
                duration: 0.7,
                ease: easeOut
            }
        }),
        hover: {
            y: -10,
            scale: 1.02,
            boxShadow: "0 20px 60px rgba(212, 175, 55, 0.25)",
            transition: { duration: 0.3 }
        }
    };

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0f0806] via-[#1a0f0a] to-[#2d1810] overflow-hidden py-20">
            <div className="absolute inset-0 pointer-events-none">
                {/* Right glow */}
                <div className="absolute top-28 -right-32 w-[500px] h-[500px] 
                    bg-gradient-to-l from-[#d4af37]/20 to-transparent rounded-full blur-2xl 
                    animate-pulse-slow" />

                {/* left */}
                <div className="absolute top-10 -left-32 w-[500px] h-[500px] 
                    bg-gradient-to-l from-[#d4af37]/8 to-transparent rounded-full blur-2xl 
                    animate-pulse-slow" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-20">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate={mounted ? "visible" : "hidden"}
                >
                    <motion.div className="inline-block mb-6" variants={itemVariants}>
                        <span className="text-[#d4af37] text-sm font-medium tracking-[0.2em] uppercase border border-[#d4af37]/30 px-4 py-2 rounded-full backdrop-blur-sm">
                            Premium Collection
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#f5f0e8] leading-tight mb-6"
                        variants={itemVariants}
                    >
                        Signature
                        <motion.span
                            className="block text-transparent bg-gradient-to-r from-[#d4af37] to-[#f4d03f] bg-clip-text"
                            variants={itemVariants}
                        >
                            Collection
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        className="text-[#d0c4b6] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        Each spirit in our collection represents decades of craftsmanship,
                        tradition, and the finest ingredients carefully selected from across India
                    </motion.p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate={mounted ? "visible" : "hidden"}
                >
                    {categories.map((category, index) => (
                        <motion.button
                            key={category}
                            className={`px-6 hidden lg:block py-3 rounded-full font-medium tracking-wide transition-all duration-300 ${filter === category
                                ? 'bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-[#1a0f0a] shadow-lg'
                                : 'bg-transparent border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 hover:border-[#d4af37]'
                                }`}
                            onClick={() => setFilter(category)}
                            variants={itemVariants}
                            custom={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category === 'all' ? 'Complete Range' : category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* fliter dropdown below lg screen */}
                <div className="block lg:hidden mb-10">
                    <div className="relative">
                        <select
                            className="w-full appearance-none px-5 py-3 rounded-full border border-[#d4af37]/40 
                            bg-[#1a0f0a] text-[#d4af37] font-medium tracking-wide 
                            focus:outline-none focus:border-[#d4af37] focus:shadow-[0_0_8px_rgba(212,175,55,0.6)] 
                            transition-all duration-300"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            {categories.map((category) => (
                                <option
                                    key={category}
                                    value={category}
                                    className="text-white"
                                >
                                    {category === 'all' ? 'Complete Range' : category}
                                </option>
                            ))}
                        </select>

                        {/* Custom Arrow Icon */}
                        <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#d4af37]">
                            ▼
                        </span>
                    </div>
                </div>


                {/* Products Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
                    initial="hidden"
                    animate={mounted ? "visible" : "hidden"}
                >
                    {filteredProducts.map((product, i) => (
                        <motion.div
                            key={product.id}
                            className="group flex flex-col justify-between relative bg-gradient-to-b from-[#2d1810]/50 to-[#1a0f0a]/80 backdrop-blur-xl border border-[#d4af37]/20 rounded-3xl overflow-hidden shadow-2xl"
                            variants={cardVariants}
                            custom={i}
                            whileHover="hover"
                            layout
                        >
                            {/* Featured Badge */}
                            {product.featured && (
                                <motion.div
                                    className="absolute top-4 right-4 z-20 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-[#1a0f0a] px-3 py-1 rounded-full text-xs font-bold tracking-wider"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.5 + i * 0.1, duration: 0.5, ease: "backOut" }}
                                >
                                    FEATURED
                                </motion.div>
                            )}

                            {/* Product Image */}
                            <div className="relative h-80 overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/80 via-transparent to-transparent z-10"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent z-20"
                                    animate={{
                                        opacity: [0.1, 0.3, 0.1]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 2 + i * 0.2
                                    }}
                                />

                                <Image
                                    src={product.img}
                                    alt={product.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Hover Overlay */}
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    <motion.button
                                        className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] hover:cursor-pointer text-[#1a0f0a] px-6 py-3 rounded-full font-semibold tracking-wide shadow-lg"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Quick View
                                    </motion.button>
                                </motion.div>
                            </div>

                            {/* Product Info */}
                            <div className="p-6 flex flex-col justify-between gap-3">
                                {/* Category & Age */}
                                <div className="flex justify-between items-center">
                                    <span className="text-[#d4af37] text-sm font-medium tracking-wider uppercase">
                                        {product.category}
                                    </span>
                                    <span className="text-[#b8a690] text-sm">
                                        {product.age}
                                    </span>
                                </div>

                                {/* Product Name */}
                                <h3 className="text-2xl font-serif font-bold text-[#f5f0e8] leading-tight group-hover:text-[#d4af37] transition-colors duration-300">
                                    {product.name}
                                </h3>

                                {/* Description */}
                                <p className="text-[#d0c4b6] text-base leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Price & CTA */}
                                <div className="flex items-center justify-between pt-4 border-t border-[#d4af37]/20">
                                    {/* <div className="text-3xl font-bold text-[#d4af37]">
                                        {product.price}
                                    </div> */}
                                    <motion.button
                                        className="bg-transparent border-2 w-full border-[#d4af37] text-[#d4af37] px-5 py-2 rounded-lg hover:bg-[#d4af37] hover:text-[#1a0f0a] font-semibold tracking-wide transition-all duration-300 group/btn"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="group-hover/btn:scale-110 font-bold text-xl transition-transform duration-300">
                                            Explore
                                        </span>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Button */}
                <div className="text-center mt-16 w-full"
                >
                    <motion.button
                        className="bg-transparent border-2 w-fit border-[#d4af37]  text-[#d4af37] px-6 py-3 rounded-lg hover:bg-[#d4af37] hover:text-[#1a0f0a] text-base md:text-lg lg:text-xl font-bold tracking-wide transition-all duration-300 group/btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10 transition-colors duration-500 group-hover:text-[#1a0f0a]">
                            View Complete Collection
                        </span>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default SignatureCollection;
