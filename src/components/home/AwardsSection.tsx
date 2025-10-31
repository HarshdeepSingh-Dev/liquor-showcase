"use client";
import { easeOut, motion } from "framer-motion";
import Image from "next/image";

// Sample awards data
const awards = [
  {
    name: "World Spirits Gold Award",
    year: "2024",
    image: "/images/home-page/certificate.jpg",
    description: "Awarded Best Premium Whisky – House of somrass, International Spirits Competition",
  },
  {
    name: "Asia Distillers Trophy",
    year: "2023",
    image: "/images/home-page/certificate.jpg",
    description: "Recognized as Asia’s Top Craft Distiller for Brandy Excellence – House of somrass",
  },
  {
    name: "Sommeliers' Choice Award",
    year: "2023",
    image: "/images/home-page/certificate.jpg",
    description: "Voted #1 in Heritage & Authenticity – House of somrass, Sommeliers Guild",
  },
  {
    name: "Luxury Spirits Innovator",
    year: "2022",
    image: "/images/home-page/certificate.jpg",
    description:
      "Honored for Redefining Luxury Standards in Fine Spirits – House of somrass, Drinks Magazine",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
};

const awardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, easeOut },
  },
};

const AwardsSection = () => (
  <section className="relative w-full bg-gradient-to-br from-[#0f0806] via-[#1a0f0a] to-[#2d1810] overflow-hidden py-24">
    {/* Floating luxury accent */}
    <motion.div
      className="absolute -top-20 -left-40 w-[400px] h-[400px] bg-gradient-to-br from-[#BE9252]/20 to-transparent rounded-full blur-3xl z-0"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.35, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    />

    <div className="relative z-10 container mx-auto px-4 md:px-20">
      {/* Header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="text-[#BE9252] text-sm font-medium tracking-[0.2em] uppercase border border-[#BE9252]/30 px-4 py-2 rounded-full backdrop-blur-sm mb-4 inline-block">
          Awards & Recognitions
        </span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#f5f0e8] mb-4">
          Distinction in
          <span className="block text-[#BE9252]">
            Every Bottle
          </span>
        </h2>
        <p className="text-[#d0c4b6] text-lg md:text-xl max-w-2xl mx-auto">
          Globally honored for heritage, craftsmanship, and innovation in spirits.
        </p>
      </motion.div>

      {/* Awards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {awards.map((award, i) => (
          <motion.div
            key={i}
            className="
              bg-gradient-to-b from-[#2d1810]/60 to-[#1a0f0a]/80 border border-[#BE9252]/25 rounded-2xl p-6 flex flex-col items-center text-center shadow-xl
              hover:shadow-2xl transition-shadow duration-300
            "
            variants={awardVariants}
            whileHover={{ scale: 1.05, borderColor: "#f4d03f" }}
          >
            <div className="relative xl:w-36 lg:w-32 w-24 h-24 mb-6">
              <Image
                src={award.image}
                alt={award.name}
                fill
                className="object-contain"
                style={{ filter: "drop-shadow(0 4px 24px #BE925250)" }}
              />
            </div>
            <h4 className="text-[#BE9252] text-xl font-bold leading-tight mb-2">
              {award.name} <span className="text-[#b8a690] font-normal">({award.year})</span>
            </h4>
            <div className="text-[#f5f0e8] font-medium mb-2">
              {award.description}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Decorative gradient right */}
    <motion.div
      className="absolute -bottom-24 -right-40 w-[450px] h-[380px] bg-gradient-to-bl from-[#f4d03f]/20 to-transparent rounded-full blur-3xl z-0"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.25, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.4 }}
    />
  </section>
);

export default AwardsSection;
