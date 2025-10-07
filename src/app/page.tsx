import SignatureCollection from "@/components/home/collection";
import Hero from "@/components/home/hero";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero />
      <SignatureCollection/>
    </div>
  );
}
