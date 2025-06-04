import React from "react";
import { Button } from "../core/Button";

export const CustomContactForm = () => {
  return (
    <div className="flex items-center justify-center">
      <form className="w-full max-w-lg p-8">
        <h2 className="font-serif text-2xl mb-6 text-gray-900">
          How Can We Help?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border-b border-gray-300 focus:border-yellow-600 outline-none py-2 px-2 text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-b border-gray-300 focus:border-yellow-600 outline-none py-2 px-2 text-sm"
          />
          <input
            type="text"
            placeholder="Your Number"
            className="border-b border-gray-300 focus:border-yellow-600 outline-none py-2 px-2 text-sm md:col-span-1"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border-b border-gray-300 focus:border-yellow-600 outline-none py-2 px-2 text-sm md:col-span-1"
          />
        </div>
        <div className="mb-6">
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full border-b border-gray-300 focus:border-yellow-600 outline-none py-2 px-2 text-sm resize-none"
          />
        </div>
        <Button>Send Message</Button>
      </form>
    </div>
  );
};
