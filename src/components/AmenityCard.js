// import React from 'react';

// // Placeholder icons - replace each with your actual SVG/Icon component
// const PickUpDropIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-8 h-8"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     {/* Replace this path with your actual “pick up & drop” icon */}
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
//   </svg>
// );
// const ScenicLawnIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-8 h-8"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     {/* Replace this with your “outdoor lawn” icon */}
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m9-9H3" />
//   </svg>
// );
// const BallroomIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-8 h-8"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     {/* Replace this with your “grand ballroom” icon */}
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4z" />
//   </svg>
// );
// const ParkingIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-8 h-8"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     {/* Replace this with your “parking” icon */}
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13h14M12 5v14" />
//   </svg>
// );
// const KidsPlayIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-8 h-8"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     {/* Replace this with your “kids play” icon */}
//     <circle cx="12" cy="12" r="10" strokeWidth="2" />
//   </svg>
// );
// const KidsPlayIconAlt = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-8 h-8"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     {/* Another placeholder if needed */}
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//   </svg>
// );
// const ArchitectureIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-8 h-8"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     {/* Replace this with your “architecture” icon */}
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M12 3v18" />
//   </svg>
// );

// const facilities = [
//   {
//     id: 1,
//     icon: <PickUpDropIcon />,
//     title: 'Pick Up & Drop',
//     description:
//       'We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.',
//   },
//   {
//     id: 2,
//     icon: <ScenicLawnIcon />,
//     title: 'Scenic Outdoor Event Lawns',
//     description:
//       'We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.',
//   },
//   {
//     id: 3,
//     icon: <BallroomIcon />,
//     title: 'Spacious Grand Ballroom',
//     description:
//       'We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.',
//   },
//   {
//     id: 4,
//     icon: <ParkingIcon />,
//     title: 'Ample Guest Parking',
//     description:
//       'We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.',
//   },
//   {
//     id: 5,
//     icon: <KidsPlayIcon />,
//     title: 'Dedicated Kids Play Zone',
//     description:
//       'We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.',
//   },
//   {
//     id: 6,
//     icon: <BallroomIcon />,
//     title: 'Spacious Grand Ballroom',
//     description:
//       'We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.',
//   },
//   {
//     id: 7,
//     icon: <KidsPlayIconAlt />,
//     title: 'Dedicated Kids Play Zone',
//     description:
//       'We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.',
//   },
//   {
//     id: 8,
//     icon: <ArchitectureIcon />,
//     title: 'Iconic Architecture & Interiors',
//     description:
//       'We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.',
//   },
// ];

// const AmenityCard = () => {
//   return (
//     <section className="w-full px-6 py-12 lg:px-24 lg:py-24">
//       {/* Section Header */}
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <span
//           className="text-sm tracking-widest uppercase"
//           style={{ color: '#C4A04B' }}
//         >
//           Facilities
//         </span>
//         <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-gray-900">
//           World‐Class Amenities For Every Occasion
//         </h2>
//       </div>

//       {/* Facilities Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {facilities.map((item) => (
//           <div
//             key={item.id}
//             className="group relative border border-[#C4A04B] bg-white p-6 transition-colors duration-300 hover:bg-[#C4A04B] hover:border-transparent"
//           >
//             {/* Icon */}
//             <div className="text-[#C4A04B] transition-colors duration-300 group-hover:text-white">
//               {item.icon}
//             </div>

//             {/* Title */}
//             <h3 className="mt-4 text-lg font-medium text-gray-900 transition-colors duration-300 group-hover:text-white">
//               {item.title}
//             </h3>

//             {/* Description */}
//             <p className="mt-2 text-sm text-gray-600 transition-colors duration-300 group-hover:text-white">
//               {item.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AmenityCard;


import React from 'react';

const AmenityCard = ({ icon, title, description }) => {
  return (
 <div className="group border border-yellow-700 bg-neutral-50 p-6 transition-all duration-300 hover:bg-yellow-700 hover:text-white">
      <div className="mb-4 text-yellow-700 group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
   
  );
};

export default AmenityCard;