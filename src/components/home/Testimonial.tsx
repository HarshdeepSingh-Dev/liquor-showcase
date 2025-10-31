"use client";
import { motion, useInView, AnimatePresence, easeIn, easeOut } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Arjun Malhotra",
    title: "Whisky Connoisseur & Collector",
    company: "Private Collection, Mumbai",
    image: "/images/testimonials/customer1.jpg",
    rating: 5,
    quote:
      "The craftsmanship in every bottle is extraordinary. Each sip tells that it has been perfected over generations. That's what premium Indian spirits should be.",
    featured: true,
  },
  {
    id: 2,
    name: "Priya Sharma",
    title: "Luxury Event Curator",
    company: "Elite Events Delhi",
    image: "/images/testimonials/customer2.jpg",
    rating: 5,
    quote:
      "Our clients consistently praise the exceptional quality and sophisticated presentation. These spirits have become our signature choice for high-end celebrations.",
    featured: false,
  },
  {
    id: 3,
    name: "Rahul Deshpande",
    title: "Spirits Competition Judge",
    company: "Indian Beverage Excellence Awards",
    image: "/images/testimonials/customer3.jpg",
    rating: 5,
    quote:
      "Remarkably complex flavor profiles with an authentic Indian character. The attention to detail in production is evident in every aspect - from aroma to finish.",
    featured: true,
  },
  {
    id: 4,
    name: "Meera Gupta",
    title: "Restaurant Owner",
    company: "Michelin Star Restaurant, Goa",
    image: "/images/testimonials/customer4.jpg",
    rating: 5,
    quote:
      "Our discerning guests appreciate the authentic heritage and premium quality. These spirits perfectly complement our fine dining experience.",
    featured: false,
  },
  {
    id: 5,
    name: "Karan Mukherjee",
    title: "Master Taster",
    company: "Indian Spirit & Wine Guild",
    image: "/images/testimonials/customer5.jpg",
    rating: 5,
    quote:
      "An exceptional representation of Indian distilling artistry. The balance, complexity, and finish rival the world's finest premium spirits.",
    featured: true,
  },
];


const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    // Auto-play functionality
    useEffect(() => {
        if (!autoPlay) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [autoPlay]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, easeIn }
        }
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, easeOut }
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.5 }
        })
    };

    const currentTestimonial = testimonials[currentIndex];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0f0806] via-[#1a0f0a] to-[#2d1810] overflow-hidden py-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-40 -right-32 w-96 h-96 bg-gradient-to-l from-[#BE9252]/8 to-transparent rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-[#cd853f]/8 to-transparent rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.6, 0.3, 0.6],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div ref={ref} className="relative z-10 container mx-auto px-4 md:px-20">
                <motion.div
                    className="text-center mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div className="inline-block mb-6" variants={itemVariants}>
                        <span className="text-[#BE9252] text-sm font-medium tracking-[0.2em] uppercase border border-[#BE9252]/30 px-4 py-2 rounded-full backdrop-blur-sm">
                            What Our Connoisseurs Say
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#f5f0e8] leading-tight mb-6"
                        variants={itemVariants}
                    >
                        Crafted to
                        <motion.span
                            className="block text-[#BE9252]"
                            variants={itemVariants}
                        >
                            Perfection
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        className="text-[#d0c4b6] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        Discover what industry experts and connoisseurs say about our premium spirits
                    </motion.p>
                </motion.div>

                {/* Main Testimonial Display */}
                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode="wait" custom={currentIndex}>
                        <motion.div
                            key={currentIndex}
                            custom={currentIndex}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="grid lg:grid-cols-2 gap-16 items-center"
                            onMouseEnter={() => setAutoPlay(false)}
                            onMouseLeave={() => setAutoPlay(true)}
                        >
                            {/* Testimonial Content */}
                            <div className="order-2 lg:order-1 space-y-8">
                                {/* Stars Rating */}
                                <div className="flex space-x-2">
                                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.1 + 0.3 }}
                                        >
                                            <svg className="w-6 h-6 text-[#BE9252]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-[#f5f0e8] leading-relaxed italic">
                                    &quot;{currentTestimonial.quote}&quot;
                                </blockquote>

                                {/* Author Info */}
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-[#BE9252]/30">
                                        <Image
                                            src="/images/home-page/client.png"
                                            alt={currentTestimonial.name}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-[#f5f0e8]">
                                            {currentTestimonial.name}
                                        </h4>
                                        <p className="text-[#BE9252] font-medium">
                                            {currentTestimonial.title}
                                        </p>
                                        <p className="text-[#b8a690] text-sm">
                                            {currentTestimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Featured Image */}
                            <div className="order-1 lg:order-2 relative">
                                <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/60 via-transparent to-transparent z-10" />
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-[#BE9252]/20 to-transparent z-20"
                                        animate={{
                                            opacity: [0.2, 0.35, 0.2]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    />

                                    <Image
                                        src="/images/home-page/hero-img.png" // Replace with testimonial-related image
                                        alt="Premium Spirits"
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation & Indicators */}
                    <div className="flex justify-center items-center space-x-8 mt-12">
                        {/* Previous Button */}
                        <motion.button
                            className="p-3 rounded-full border-2 border-[#BE9252]/30 text-[#BE9252] hover:bg-[#BE9252]/10 hover:border-[#BE9252] transition-all duration-300"
                            onClick={prevTestimonial}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>

                        {/* Indicators */}
                        <div className="flex space-x-3">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-[#BE9252] scale-125'
                                        : 'bg-[#BE9252]/30 hover:bg-[#BE9252]/60'
                                        }`}
                                    onClick={() => setCurrentIndex(index)}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>

                        {/* Next Button */}
                        <motion.button
                            className="p-3 rounded-full border-2 border-[#BE9252]/30 text-[#BE9252] hover:bg-[#BE9252]/10 hover:border-[#BE9252] transition-all duration-300"
                            onClick={nextTestimonial}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </div>
                </div>

                {/* Additional Social Proof */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-[#BE9252]/20"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {[
                        { number: "1000+", label: "Happy Customers" },
                        { number: "50+", label: "Industry Awards" },
                        { number: "4.9/5", label: "Average Rating" },
                        { number: "25+", label: "Countries Served" }
                    ].map((stat, index) => (
                        <motion.div key={index} className="text-center" variants={itemVariants}>
                            <motion.div
                                className="text-3xl md:text-4xl font-bold text-[#BE9252] mb-2"
                                variants={itemVariants}
                            >
                                {stat.number}
                            </motion.div>
                            <div className="text-[#b8a690] font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
