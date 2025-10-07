import Image from "next/image";

const Hero = () => {
    return (
        <div
            className="relative w-full p-4 bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: "url('/images/home-page/hero-img.png')" }}
        >
            <div className="absolute inset-0 bg-[#00000066]" />
            <div className="relative border-2 border-white md:py-12 py-8 px-4 mx-auto">
                <h1 className="xl:text-6xl md:text-4xl text-2xl mb-6 font-semibold text-white mx-auto w-fit font-serif">
                    Discover the Craft Behind Fine Spirits
                </h1>
                <p className="font-medium xl:text-xl md:text-lg text-base font-sans text-white max-w-xl text-center mx-auto">
                    A showcase of distinguished liquor brands from India - crafted with heritage,
                    tradition, and responsibility.
                </p>

                <button className="mt-8 bg-transparent hover:bg-white/25 border-2 mx-auto text-lg block font-sans text-white font-semibold px-6 py-3 hover:cursor-pointer transition-all duration-300">
                    Explore Our Collection
                </button>
            </div>
        </div>
    )
}

export default Hero;