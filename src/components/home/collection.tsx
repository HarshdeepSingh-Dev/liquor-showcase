import Image from "next/image";

const products = [
    {
        name: "Golden Reserve Whisky",
        description: "Smoky, rich, and aged to perfection.",
        img: "/images/home-page/product.png", // use your image path here
    },
    {
        name: "Noble Oak Rum",
        description: "Caramel notes with a spicy finish.",
        img: "/images/home-page/product.png",
    },
    {
        name: "Heritage Vintage Brandy",
        description: "Smooth, bold flavors and classic aroma.",
        img: "/images/home-page/product.png",
    },
];

const SignatureCollection = () => (
    <section className="w-full bg-gradient-to-r from-[#2d1a0f] via-[#3d2114] to-[#1a130d] px-4 py-12 md:px-20">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-[#f1e4d3] mb-16">
            Signature Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map((product) => (
                <div
                    key={product.name}
                    className="bg-white/20 rounded-lg shadow-lg p-2 max-w-sm"
                >
                    <div className="p-4 border-2 border-white w-full flex flex-col items-center">
                        <div className="w-32 h-48 mb-4 relative">
                            <Image
                                src={product.img}
                                alt={product.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>
                        <h3 className="text-xl font-serif text-[#f1e4d3] font-semibold text-center">{product.name}</h3>
                        <p className="text-[#d6b370] text-base mb-4 text-center font-medium">{product.description}</p>
                        <button className="border-2 border-[#f1e4d3] text-[#f1e4d3] px-5 py-2  hover:bg-white/25 hover:cursor-pointer transition-all font-semibold">
                            View Details
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default SignatureCollection;
