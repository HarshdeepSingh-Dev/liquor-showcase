'use client'
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
    return (
        <div
            className="relative w-full p-4 bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: "url('/images/home-page/hero-img.png')" }}
        >
            <div className="absolute inset-0 bg-[#00000066]" />
            <motion.div
                className="relative border-2 border-white md:py-12 py-8 px-4 mx-auto"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1
                    className="xl:text-6xl text-center md:text-4xl text-2xl mb-6 font-semibold text-white mx-auto w-fit font-serif"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                >
                    Discover the Craft Behind Fine Spirits
                </motion.h1>
                <motion.p
                    className="font-medium xl:text-xl md:text-lg text-base font-sans text-white max-w-xl text-center mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                >
                    A showcase of distinguished liquor brands from India - crafted with heritage,
                    tradition, and responsibility.
                </motion.p>
                <motion.button
                    className="mt-8 bg-transparent hover:bg-white/25 border-2 mx-auto text-lg block font-sans text-white font-semibold px-6 py-3 hover:cursor-pointer hover:scale-105 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    // whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                    Explore Our Collection
                </motion.button>
            </motion.div>
        </div>
    )
}

export default Hero;