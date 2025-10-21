import SmoothScrolling from "@/components/ui/smoothScroll";
import BrandStory from "@/components/home/BrandStory";
import SignatureCollection from "@/components/home/collection";
import Hero from "@/components/home/hero";
import Navbar from "@/components/layout/navbar";
import Testimonials from "@/components/home/Testimonial";
import AwardsSection from "@/components/home/AwardsSection";
import ResponsibleDrinkingSection from "@/components/home/ResponsibleDrinking";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <SmoothScrolling>
      <Navbar />
      {/* hero */}
      <Hero />

      {/* our collection */}
      <SignatureCollection />

      {/* story origin */}
      <BrandStory />

      {/* client reviews */}
      <Testimonials />

      {/* awards */}
      <AwardsSection />

      {/* responsible drinking */}
      <ResponsibleDrinkingSection/>


      <Footer/>
    </SmoothScrolling>
  );
}
