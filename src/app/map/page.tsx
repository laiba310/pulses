import React from "react";

const Map = () => {
  return (
    <div className="flex flex-col items-center text-center my-12 px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#4A3F35] tracking-wider drop-shadow-md mb-6">
        Where to Find Us
      </h1>

      <p className="text-lg text-gray-600 mb-4">📍 Karachi, Pakistan</p>

      <div className="relative w-full max-w-[1200px] h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl border border-gray-300">
      <iframe
  src="https://maps.google.com/maps?q=24.8520827,67.0059669&hl=en&z=15&output=embed"
  className="w-full h-full"
  style={{ border: "0" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>



      </div>
    </div>
  );
};

export default Map;
