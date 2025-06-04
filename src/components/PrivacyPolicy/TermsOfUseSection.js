import React, { useState } from "react";

const tabs = [
  {
    title: "Services Offered",
    key: "services",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry...`,
  },
  {
    title: "Authorized Use",
    key: "authorized",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry...`,
  },
  {
    title: "Registration",
    key: "registration",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry...`,
  },
  {
    title: "Content",
    key: "content",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry...`,
  },
  {
    title: "Liability",
    key: "liability",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry...
    
- Interruptions, viruses, technical problems...
- Delay or unavailability...
- Third-party actions...
- Unavailability due to maintenance...
- Any other event beyond the Company’s control.`,
  },
];

const TermsOfUseSection = () => {
  const [activeTab, setActiveTab] = useState("services");

  const activeContent = tabs.find((tab) => tab.key === activeTab);

  return (
    <section className="w-full bg-white py-10 px-4 lg:px-24 flex flex-col lg:flex-row gap-10 mt-32">
      {/* Left Tab List */}
      <div className="lg:w-1/4 w-full border border-gray-200 rounded-md">
        <div className="bg-gray-100 border-b p-4 font-semibold">Terms of Use VICC</div>
        <ul className="divide-y">
          {tabs.map((tab) => (
            <li
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`cursor-pointer px-4 py-3 text-sm font-medium ${
                activeTab === tab.key
                  ? "bg-yellow-100 text-yellow-800"
                  : "hover:bg-gray-50"
              }`}
            >
              {tab.title}
            </li>
          ))}
        </ul>

        {/* Additional static links if needed */}
        <div className="border-t p-4 text-sm space-y-2">
          <p className="text-gray-700 cursor-pointer hover:underline">Privacy policy</p>
          <p className="text-gray-700 cursor-pointer hover:underline">Support</p>
          <p className="text-gray-700 cursor-pointer hover:underline">Acceptable Use Policy</p>
        </div>
      </div>

      {/* Right Content Display */}
      <div className="lg:w-3/4 w-full">
        <h2 className="text-3xl font-serif font-semibold mb-6">Terms Of Use</h2>
        <div className="space-y-5 text-gray-800 leading-relaxed">
          <h3 className="text-xl font-semibold">{activeContent.title}</h3>
          <p className="whitespace-pre-line">{activeContent.content}</p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUseSection;
