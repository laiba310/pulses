import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurProduct = () => {
  return (
    <div className="flex flex-col items-center   px-4">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#4A3F35] tracking-wider drop-shadow-md text-center mb-10">
        Our Product
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-screen-xl">
        {[
          { img: "/desi chick peas.webp", title: "Desi Chickpeas" },
          { img: "/kabuli chick peas.jpg", title: "Kabuli Chickpeas" },
          { img: "/IMG_5204_800x.webp", title: "Red Lentils" },
        ].map((product, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition duration-300 flex flex-col items-center hover:shadow-2xl"
          >
            <Image
              src={product.img}
              alt={product.title}
              width={300}
              height={250}
              className="rounded-lg object-cover w-full h-48"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-[#4A3F35] mt-4 text-center">
              {product.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Browse Products Button */}
      <div className="mt-12 animate-bounce">
        <Link
          href="/product"
          className="inline-block px-10 py-4 text-white bg-[#4A3F35] hover:bg-[#6A5643] rounded-full shadow-lg font-medium text-lg transition duration-300"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
};

export default OurProduct;
