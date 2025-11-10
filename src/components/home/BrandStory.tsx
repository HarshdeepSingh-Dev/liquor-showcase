'use client'
import { easeInOut, easeOut, motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const BrandStory = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, easeInOut }
        }
    };

    const imageVariants = {
        hidden: { scale: 1.1, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 1.2, ease: easeOut }
        }
    };

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-[#1a0f0a] via-[#2d1810] to-[#0f0806] overflow-hidden">

            <div ref={ref} className="relative z-10 container mx-auto px-8 py-20 md:py-32">
                <motion.div
                    className="grid lg:grid-cols-2 gap-16 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Left Content */}
                    <motion.div className="flex flex-col items-center md:items-start space-y-8" variants={itemVariants}>
                        <motion.div className="inline-block" variants={itemVariants}>
                            <span className="text-[#BE9252] text-sm font-medium tracking-[0.2em] uppercase border border-[#BE9252]/30 px-4 py-2 rounded-full backdrop-blur-sm">
                                Heritage & Craft
                            </span>
                        </motion.div>

                        <motion.h2
                            className="text-4xl md:text-6xl text-center md:text-start lg:text-7xl font-serif font-bold text-[#f5f0e8] leading-tight"
                            variants={itemVariants}
                        >
                            Legacy in
                            <motion.span
                                className="block text-[#BE9252]"
                                variants={itemVariants}
                            >
                                Every Drop
                            </motion.span>
                        </motion.h2>

                        <motion.div className="space-y-4 text-center md:text-start text-[#d0c4b6]" variants={itemVariants}>
                            <p className="text-lg md:text-xl text-[#BE9252] leading-relaxed font-semibold font-serif">
                                &quot;Emarti - The Spirit of Indian Sweetness&quot;
                            </p>
                            
                            <p className="text-base md:text-lg leading-normal opacity-90">
                                Every culture has its own flavor of Joy for India, it&quot;s the sweetness of Imarti golden, rich, and timelessly indulgent.
                                 <span className="text-[#BE9252] font-medium"> From that same sweetness and warmth comes Emarti</span>, a whiskey born from tradition, crafted with elegance, and perfected with patience.

                            </p>
                            <p className="text-base md:text-lg leading-normal opacity-90">
                                We chose the name Emarti not just for its sound, but for what it means <span className="text-[#BE9252] font-medium">soft in taste, strong in spirit.</span>
                                Each sip carries the memory of celebration, the comfort of home, and the artistry of Indian craftsmanship,
                                where fire meets sweetness, and time becomes taste.
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-3 gap-8 pt-8 border-t border-[#BE9252]/20"
                            variants={itemVariants}
                        >
                            <div className="text-center">
                                <motion.div
                                    className="text-3xl md:text-4xl font-bold text-[#BE9252] mb-2"
                                    variants={itemVariants}
                                >
                                    1895
                                </motion.div>
                                <div className="text-sm text-[#b8a690] font-medium">Founded</div>
                            </div>
                            <div className="text-center">
                                <motion.div
                                    className="text-3xl md:text-4xl font-bold text-[#BE9252] mb-2"
                                    variants={itemVariants}
                                >
                                    127+
                                </motion.div>
                                <div className="text-sm text-[#b8a690] font-medium">Years Legacy</div>
                            </div>
                            <div className="text-center">
                                <motion.div
                                    className="text-3xl md:text-4xl font-bold text-[#BE9252] mb-2"
                                    variants={itemVariants}
                                >
                                    50+
                                </motion.div>
                                <div className="text-sm text-[#b8a690] font-medium">Awards</div>
                            </div>
                        </motion.div>

                        <motion.button
                            className="group hover:cursor-pointer relative mt-8 bg-transparent border-2 border-[#BE9252] text-[#BE9252] px-8 py-4 font-semibold text-lg tracking-wider transition-all duration-500 overflow-hidden"
                            variants={itemVariants}
                            whileHover={{
                                boxShadow: "0 0 30px rgba(212, 175, 55, 0.3)",
                                borderColor: "#f4d03f"
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10 transition-colors duration-500 ">
                                Discover Our Heritage
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[#BE9252] to-[#f4d03f] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                                initial={{ scaleX: 0 }}
                            />
                        </motion.button>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className="relative h-[600px] md:h-[700px] rounded-2xl overflow-hidden"
                        variants={imageVariants}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/80 via-transparent to-transparent z-10" />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-[#BE9252]/20 to-transparent z-20"
                            animate={{
                                background: [
                                    "linear-gradient(45deg, rgba(212,175,55,0.2) 0%, transparent 100%)",
                                    "linear-gradient(45deg, rgba(244,208,63,0.15) 0%, transparent 100%)",
                                    "linear-gradient(45deg, rgba(212,175,55,0.2) 0%, transparent 100%)"
                                ]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* You can replace this with your actual distillery/heritage image */}
                        <Image
                            src="/images/home-page/heritage.jpg" // Replace with your heritage image
                            alt="Heritage Distillery"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-700 hover:scale-105"
                        />

                        <motion.div
                            className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-black/30 rounded-xl p-6 border border-[#BE9252]/30"
                            variants={itemVariants}
                        >
                            <blockquote className="text-[#f5f0e8] text-lg font-medium italic leading-relaxed">
                                &quot;Excellence is not a skill, it&apos;s an attitude passed down through generations.&quot;
                            </blockquote>
                            <cite className="text-[#BE9252] text-sm font-medium mt-2 block">
                                 Master Distiller, 5th Generation
                            </cite>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#BE9252]/50 to-transparent"
                animate={{ scaleY: [1, 2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
        </section>
    );
};

export default BrandStory;
