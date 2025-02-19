import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/footer";

const Product = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#4A3F35] tracking-wider drop-shadow-md text-center">
          Premium Organic Product
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full max-w-screen-xl">
          {[
            { img: "/desi chick peas.webp", title: "Desi Chickpeas", desc: "Enjoy the natural goodness of fresh Desi chickpeas, straight from the farm!" },
            { img: "/kabuli chick peas.jpg", title: "Kabuli Chickpeas", desc: "Smooth texture and nutty flavor, perfect for soups and stews." },
            { img: "/download (10).jpeg", title: "Mong Peas", desc: "Packed with protein and flavor, a healthy addition to your diet." },
            { img: "/white beans.webp", title: "White Beans", desc: "Healthy and versatile, full of fiber and protein for great meals." },
            { img: "/1704043657-0363.avif", title: "Yellow Peas", desc: "Organic yellow peas, known for versatility and health benefits." },
            { img: "/k1qu0yqvdif.webp", title: "Black Matpe", desc: "Perfect for adding richness to your dishes, packed with fiber." },
            { img: "/IMG_5204_800x.webp", title: "Red Lentils", desc: "A must-have for soups and curries, organic and rich in protein." },
            { img: "/Pearl-Millet.jpg", title: "Millet", desc: "Versatile and nutritious grain, ideal for balanced meals." },
          ].map((product, index) => (
            <div
              key={index}
              className="p-6 bg-[#E3D5C2] rounded-xl shadow-xl transform hover:scale-105 transition duration-300 border-4 border-[#C2A98D] flex flex-col items-center"
            >
              <Image
                src={product.img}
                alt={product.title}
                width={300}
                height={250}
                className="rounded-lg object-cover w-full h-48"
              />
              <h1 className="text-lg sm:text-xl font-semibold text-[#4A3F35] mt-4 text-center">
                {product.title}
              </h1>
              <p className="mt-3 text-sm text-[#5A4B3B] text-center max-w-xs">
                {product.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
