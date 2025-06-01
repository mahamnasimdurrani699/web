import React from 'react';

const Contact = () => {
  return (
    <>
      {/* Contact Info Section */}
      <div className="py-8 mt-2 bg-ternary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Phone */}
            <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
              <div className="text-lg font-semibold">Phone</div>
              <div className="text-gray-700">+92 3196971457</div>
            </div>
            {/* Email */}
            <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
              <div className="text-lg font-semibold">Email</div>
              <div className="text-gray-700">mahamdurrani168@gmail.com</div>
            </div>
            {/* Address */}
            <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
              <div className="text-lg font-semibold">Address</div>
              <div className="text-gray-700">Lahore, Pakistan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-12 bg-ternary">
        <div className="container mx-auto max-w-3xl bg-white p-8 shadow-lg rounded-lg ">
          <h2 className="text-2xl font-bold text-center mb-6">Get in Touch</h2>
          <form className="space-y-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
              <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
            </div>
            <input type="text" placeholder="Address" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
            <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"></textarea>
            <button className="w-full h-16 bg-fourth from-accent to-primary shadow-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

