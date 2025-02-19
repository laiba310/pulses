'use client';
import { useEffect, useState } from 'react';

const texts = ["Welcome To The", "Hanif Traders", "Group Of Companies!", "The Place Of Trust"];

export default function HeroSection() {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 100;
    const pauseTime = 2000;

    const handleTyping = () => {
      const fullText = texts[textIndex];
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex]);

  return (
    <section className="bg-[#cac4be] relative py-20 overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-[#cac4be] gap-12 px-6">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left bg-[#cac4be]">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight font-heartbeat bg-[#cac4be]">
            <span className="bg-[#cac4be]">{currentText}</span>
            <span className="blinking-cursor bg-[#cac4be]">|</span>
          </h1>

          {/* Fixed Quotes and Apostrophe */}
          <p className="mt-6 text-lg text-gray-700 bg-[#cac4be]">
            &quot;Pulses are nature&rsquo;s tiny powerhouses, packed with nutrition and energy, fueling life with every bite.&quot;
          </p>

          <div className="mt-8 animate-pulse bg-[#cac4be]">
            <a
              href="#recipes"
              className="inline-block px-8 py-4 text-white bg-black hover:bg-gray-600 rounded-full shadow-lg font-medium text-lg transition duration-300"
            >
              Browse product
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <div className="relative group animate-zoomIn">
            <img
              src="/p2.jpg"
              alt="Delicious food"
              className="rounded-lg shadow-xl w-full lg:w-[700px] lg:h-[500px] transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-50 transition duration-500 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
