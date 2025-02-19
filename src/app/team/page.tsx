import React from 'react';

const Team = () => {
  return (
    <section className=" mt-10 mb-10">
      <div className="text-center mb-12">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#4A3F35] tracking-wider drop-shadow-md text-center mb-10">
          Our Team
          
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="group shadow-md rounded-lg overflow-hidden">
          <img
            src="/nano.jpg"
            alt="Team Member 1"
            className="w-full h-56 object-cover object-top group-hover:scale-110 transition-transform duration-300"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-700">Muhammad Hanif</h3>
            <p className="text-sm text-gray-500">Head Of Company</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="group shadow-md rounded-lg overflow-hidden">
          <img
            src="/danish.jpg"
            alt="Team Member 2"
            className="w-full h-56 object-cover  object-top group-hover:scale-110 transition-transform duration-300"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-700">Danish Hanif</h3>
            <p className="text-sm text-gray-500">Manger Director </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="group shadow-md rounded-lg overflow-hidden">
          <img
            src="/2.jpg"
            alt="Team Member 3"
            className="w-full h-56 object-cover  object-top group-hover:scale-110 transition-transform duration-300"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-700">Zeeshan Hanif</h3>
            <p className="text-sm text-gray-500">Accontant </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
