import React from "react";

function Contact() {
  return (
    <div className="h-[87vh] flex items-center justify-center bg-[#F1EADA]">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-center text-[#743a36] mb-6">Contact Us</h1>
        
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-[#743a36] mb-2">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-[#743a36] rounded-md focus:ring-2 focus:ring-[#743a36] focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium text-[#743a36] mb-2">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-[#743a36] rounded-md focus:ring-2 focus:ring-[#743a36] focus:outline-none"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-[#743a36] text-white rounded-md text-lg font-semibold hover:bg-[#5b2d24] focus:outline-none focus:ring-2 focus:ring-[#743a36] focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
