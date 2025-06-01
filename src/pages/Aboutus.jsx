import React from "react";

const Aboutus = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-4 bg-ternary mt-2">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center ">
        
      <div className="w-92 md:w-72 md:h-72 overflow-hidden rounded-full border-4 border-fourth shadow-md">
          <img
            src="/girl.jfif" 
            alt="Team"
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">
            Maham Nasim Durrani
          </h2>
          <h4 className="text-fourth font-semibold mt-2">Web Developers</h4>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Passionate web developers dedicated to crafting user-friendly and
            efficient digital experiences. With a strong foundation in modern
            web technologies, we build scalable and responsive applications
            tailored to your needs.
          </p>

          {/* Contact & Social Links */}
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a href="mailto:mahamdurrani168@gmail.com" className="text-green-500 hover:text-green-700 transition">
               Email
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-blue-500 hover:text-blue-700 transition">
               LinkedIn
            </a>
            <a href="https://github.com" target="_blank" className="text-gray-800 hover:text-gray-900 transition">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
