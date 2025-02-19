import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';

const About = () => {
  return (
    <>
      <Header />
      <div className="relative w-full h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('/images (5).jpeg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Slightly darker overlay for better readability */}

        <div className="relative z-10 pt-96 flex justify-center items-start">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-7xl w-full mx-4 text-center space-y-6">
            <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4 text-shadow-md">
              About Us
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Hanif Traders Group of Companies</strong> was founded in <strong>2002</strong> as a <strong>local brokerage house</strong> and has now expanded into a <strong>leading global trading</strong> company. Led by <strong>Mohammad Hanif</strong>, along with his son&apos;s <strong>Danish Hanif</strong> and <strong>Zeeshan Hanif</strong>, we have built a strong reputation in <strong>Imports, Exports, Trade, Indenting, Local Brokerage, Production, Warehousing, and Supply Chain Management</strong>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a <strong>dedicated team</strong> of professionals and a <strong>commitment to excellence</strong>, Hanif Traders has grown into a <strong>trusted industry name</strong>. Our <strong>vast experience</strong> in <strong>pulses and grains</strong> enables us to maintain a <strong>strong network</strong> of suppliers, buyers, traders, stockists, manufacturers, and distributors worldwide.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
  At <strong>Hanif Traders</strong>, we uphold our <strong>motto</strong>:<br />
  🚀 <strong>Hanif Traders &ldquo; The Name of Trust.&rdquo;</strong> <br />
  We believe in <strong>quality, reliability, and long-term partnerships</strong>, ensuring our clients receive <strong>exceptional service</strong> for all their trade and business needs.
</p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our <strong>global reach</strong> continues to expand, making the <strong>Hanif Traders Community</strong> stronger every day. 🌍✨
            </p>
          </div>
        </div>
      </div>

    </>
  );
}

export default About;
