import SmoothScrolling from "@/components/smoothScroll";
import BrandStory from "@/components/home/BrandStory";
import SignatureCollection from "@/components/home/collection";
import Hero from "@/components/home/hero";
import Navbar from "@/components/layout/navbar";
import Testimonials from "@/components/home/Testimonial";

export default function Home() {
  return (
    <SmoothScrolling>
      <Navbar />
      <Hero />
      <SignatureCollection />
      <BrandStory />
      <Testimonials/>
    </SmoothScrolling>
  );
}
