"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const storyImages = [
  "/images/home-page/story1.png",
  "/images/home-page/story2.png"
];

const StorySection = () => (
  <section id="story" className="relative w-full bg-gradient-to-br from-[#1b120a] via-[#2d1810] to-[#0f0806] py-16 px-4 flex items-center justify-center">
    <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row bg-[#1a130d]/90 rounded-3xl shadow-2xl overflow-hidden border border-[#d4af37]/30">
      {/* Images collage */}
      <motion.div
        className="flex-1 flex flex-col gap-4 md:gap-4 md:w-1/2 p-6 md:p-10 bg-[#211913]/60"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {storyImages.map((src, i) => (
          <div key={i} className="relative w-full h-44 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-[#d4af37]/10 bg-[#19130e] mb-4 md:mb-0 md:mr-4 last:mr-0">
            <Image
              src={src}
              alt="Distillery story"
              fill
              className="object-cover object-center opacity-90"
              style={{ filter: "brightness(0.93)" }}
            />
          </div>
        ))}
      </motion.div>
      {/* Textual story */}
      <motion.div
        className="flex-1 flex flex-col justify-center md:justify-start items-start md:w-1/2 p-6 md:p-10"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-[#BE9252] font-bold text-base uppercase tracking-widest mb-2 border-b-2 border-[#d4af37]/30 pb-1">
          Our Story
        </h3>

        <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#f5f0e8] mb-4">
          House of Somrass<br />
          <span className="text-[#BE9252]">
            A Tradition Reborn
          </span>
        </h2>

        <p className="text-[#e5dbcb] font-sans mb-5 leading-relaxed text-base md:text-lg">
          Every great journey begins with a simple idea and so did ours. House of Somrass was not born in a grand distillery or corporate boardroom, but in a small room filled with determination, curiosity, and the unmistakable aroma of ambition.<br /><br />
          Our founder spent countless late nights mastering the delicate balance of flavor, aroma, and character that defines a remarkable whiskey. After many trials, Emarti Blended Whiskey was born: a spirit that carries warmth, smoothness, and a story in every sip.<br /><br />
          Today, we continue to create small batches with patience and authenticity. Every bottle is a moment, a memory, and an experience—crafted to linger long after the last sip.
        </p>
        <blockquote className="italic border-l-4 border-[#BE9252] pl-4 text-[#BE9252] text-lg font-medium">
          “We believe great whiskey takes time. At House of Somrass, we don’t just make whiskey – we create moments that last.”
        </blockquote>
      </motion.div>
    </div>
  </section>
);

export default StorySection;