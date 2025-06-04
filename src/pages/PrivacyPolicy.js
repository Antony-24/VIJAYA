import React from "react";
import { HeaderSection } from "../components/privacy_policy/HeaderSection";

const sidebarLinks = [
  { label: "Terms of use VICC", active: true },
  { label: "Services Offered" },
  { label: "Authorized Use" },
  { label: "Registration" },
  { label: "Content" },
  { label: "Liability" },
];

const quickLinks = [
  { label: "Privacy policy" },
  { label: "Support" },
  { label: "Acceptable Use Policy" },
];

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      <HeaderSection />
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Sidebar */}
        <aside className="md:col-span-1 w-full mb-10 md:mb-0">
          <div className="overflow-hidden">
            <div className="bg-[#c4a04b] text-white text-sm font-semibold px-4 py-3">
              Terms of use VICC
            </div>
            <ul>
              {sidebarLinks.slice(1).map((item, idx) => (
                <li
                  key={item.label}
                  className={`px-4 py-3 text-sm font-medium cursor-pointer transition-colors duration-200 
                    ${
                      item.active
                        ? "text-[#c4a04b] font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 space-y-2">
            {quickLinks.map((item) => (
              <button
                key={item.label}
                className="w-full border border-gray-200 rounded bg-white px-3 py-2 text-left text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c4a04b] transition hover:bg-gray-50"
                style={{ fontFamily: "inherit" }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </aside>
        {/* Main Content */}
        <main className="md:col-span-3 w-full">
          <h1 className="font-['Gilda_Display'] text-2xl md:text-3xl font-medium mb-6 text-gray-900">
            Terms Of Use
          </h1>
          <p className="text-gray-700 mb-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="text-gray-700 mb-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h2 className="font-['Gilda_Display'] text-xl font-medium mb-3 mt-10 text-gray-900">
            Services Offered
          </h2>
          <p className="text-gray-700 mb-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h2 className="font-['Gilda_Display'] text-xl font-medium mb-3 mt-10 text-gray-900">
            Authorized Use
          </h2>
          <p className="text-gray-700 mb-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h2 className="font-['Gilda_Display'] text-xl font-medium mb-3 mt-10 text-gray-900">
            Registration
          </h2>
          <p className="text-gray-700 mb-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h2 className="font-['Gilda_Display'] text-xl font-medium mb-3 mt-10 text-gray-900">
            Content
          </h2>
          <p className="text-gray-700 mb-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h2 className="font-['Gilda_Display'] text-xl font-medium mb-3 mt-10 text-gray-900">
            Liability
          </h2>
          <p className="text-gray-700 mb-4 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1 text-xs">
            <li>
              Interruptions, viruses, technical problems, interferences,
              omission, unavailability, power cuts, failure of the
              telecommunication networks or the User's equipment which are not
              the Company's responsibility.
            </li>
            <li>
              Delays or unavailability of the Website and the Services due to
              deficiencies or traffic overload on the Internet, in the
              communication network or the electricity grid.
            </li>
            <li>Third-party actions.</li>
            <li>
              Unavailability of the Website and the Services due to maintenance
              or software updates.
            </li>
            <li>Any other event beyond the Company's direct control.</li>
          </ul>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
