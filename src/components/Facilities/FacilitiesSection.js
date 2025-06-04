import React from 'react';
import rect1 from '../../assets/images/Rectangle 34624671.svg'
import rect2 from '../../assets/images/Rectangle 34624676.svg'
import rect3 from '../../assets/images/Rectangle 34624677.svg'






const FacilitiesSection = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 pb-20 mt-10'>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-sm tracking-widest text-gray-500 uppercase">Facilities</h3>
        <h2 className="text-3xl font-serif font-semibold mt-2 mb-6">Weddings & Celebrations</h2>
        <p className="mb-4 text-gray-600 max-w-3xl">
          Nestled in the heart of elegance, Vijaya Convention Center is more than just a venue — it’s where dreams are brought to life.
        </p>
        <ul className="list-disc ml-6 text-sm text-gray-600 space-y-1">
          <li>Interruptions, viruses, technical problems, interferences</li>
          <li>Delays or unavailability of the Website and the Services</li>
          <li>Third-party actions</li>
          <li>Unavailability of the Website</li>
          <li>Any other event beyond the Company’s direct control</li>
        </ul>
        <button className="mt-6 px-6 py-2 border border-yellow-600 text-yellow-600 rounded-full hover:bg-yellow-600 hover:text-white transition">
          Enquiry Now
        </button>        
      </div>

      <div>
          <img src={rect1} alt="Kabani Hall" className="w-full rounded-lg mb-4" />
        </div>
      </div>
     

      {/* Halls and Suites */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 pb-20">
        {/* Kabani Hall */}
        <div>
          <img src={rect1} alt="Kabani Hall" className="w-full rounded-lg mb-4" />
        </div>
        <div>
          <h4 className="text-xs uppercase text-gray-400">Modern</h4>
          <h3 className="text-2xl font-semibold font-serif mb-2">Kabani Hall</h3>
          <p className="text-sm text-gray-600 mb-2">
            Nestled in the heart of elegance, Vijaya Convention Center is more than just a venue.
          </p>
          <ul className="list-disc ml-6 text-sm text-gray-600 space-y-1">
            <li>Interruptions, viruses, technical problems, interferences</li>
            <li>Delays or unavailability of the Website and the Services</li>
            <li>Third-party actions</li>
            <li>Unavailability of the Website</li>
            <li>Any other event beyond the Company’s direct control</li>
          </ul>
        </div>

        {/* Periyar Hall */}
        <div>
          <h4 className="text-xs uppercase text-gray-400">Discover</h4>
          <h3 className="text-2xl font-semibold font-serif mb-2">Periyar Hall</h3>
          <p className="text-sm italic text-gray-600 mb-2">
            Periyar is the largest river... can accommodate up to 3,000 guests.
          </p>
          <ul className="list-disc ml-6 text-sm text-gray-600 space-y-1">
            <li>Interruptions, viruses, technical problems, interferences</li>
            <li>Delays or unavailability of the Website and the Services</li>
            <li>Third-party actions</li>
            <li>Unavailability of the Website</li>
            <li>Any other event beyond the Company’s direct control</li>
          </ul>
        </div>
        <div>
          <img src={rect2} alt="Periyar Hall" className="w-full rounded-lg mb-4" />
        </div>

        {/* Waterbody & Fountain */}
        <div>
          <img src={rect2} alt="Waterbody" className="w-full rounded-lg mb-4" />
        </div>
        <div>
          <h4 className="text-xs uppercase text-gray-400">Experiences</h4>
          <h3 className="text-2xl font-semibold font-serif mb-2">Waterbody & Fountain</h3>
          <p className="text-sm text-gray-600 mb-2">
            Nestled in the heart of elegance... from opulent weddings to exhibitions.
          </p>
          <ul className="list-disc ml-6 text-sm text-gray-600 space-y-1">
            <li>Interruptions, viruses, technical problems, interferences</li>
            <li>Delays or unavailability of the Website and the Services</li>
            <li>Third-party actions</li>
            <li>Unavailability of the Website</li>
            <li>Any other event beyond the Company’s direct control</li>
          </ul>
        </div>

        {/* Deluxe Allure Suites */}
        <div>
          <h4 className="text-xs uppercase text-gray-400">Discover</h4>
          <h3 className="text-2xl font-semibold font-serif mb-2">Deluxe Allure Suites</h3>
          <p className="text-sm italic text-gray-600 mb-2">
            Periyar is the largest river... can accommodate up to 3,000 guests.
          </p>
          <ul className="list-disc ml-6 text-sm text-gray-600 space-y-1">
            <li>Interruptions, viruses, technical problems, interferences</li>
            <li>Delays or unavailability of the Website and the Services</li>
            <li>Third-party actions</li>
            <li>Unavailability of the Website</li>
            <li>Any other event beyond the Company’s direct control</li>
          </ul>
        </div>
        <div>
          <img src={rect3} alt="Deluxe Suite" className="w-full rounded-lg mb-4" />
        </div>
      </div>

     
    </div>
  );
};

export default FacilitiesSection;
