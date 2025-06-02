import React from "react";

export const EnquiryForm = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-white px-6 py-12">
      <div className="w-[475px] bg-black border-2 border-blue-500 p-6 rounded-md">
        <h3 className="font-['Gilda Display'] text-white text-xl font-medium mb-6">
          Enquiry Now
        </h3>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-white text-white text-sm placeholder-white focus:outline-none py-1"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-white text-white text-sm placeholder-white focus:outline-none py-1"
            />
            <input
              type="text"
              placeholder="Your Number"
              className="w-full bg-transparent border-b border-white text-white text-sm placeholder-white focus:outline-none py-1 mt-1"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border-b border-white text-white text-sm placeholder-white focus:outline-none py-1"
            />
          </div>
          <div>
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full bg-transparent border-b border-white text-white text-sm placeholder-white focus:outline-none py-1"
            />
          </div>
          <div className="pt-4">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
};
