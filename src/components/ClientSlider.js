// components/ClientSlider.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import cli1 from '../assets/images/cli1.svg';
import cli2 from '../assets/images/cli2.svg';
import cli3 from '../assets/images/cli3.svg';
import cli4 from '../assets/images/cli4.svg';
import cli5 from '../assets/images/cli5.svg';
import cli6 from '../assets/images/cli6.svg';
import cli7 from '../assets/images/cli7.svg';




const clients = [
  { name: "H&M", logo: cli1 },
  { name: "Dell", logo: cli2 },
  { name: "Oyo", logo: cli3 },
  { name: "Paytm", logo: cli4 },
  { name: "Swiggy", logo: cli5 },
  { name: "Udemy", logo: cli6 },
  { name: "Tata Cliq", logo: cli7 },
];

const ClientSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <p className="text-sm tracking-widest text-amber-700 font-semibold">WE BUILD ONLY BIG THINGS</p>
        <h2 className="text-3xl font-serif text-gray-800">We Served</h2>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="px-4">
              <div className="rounded-md flex justify-center items-center h-32">
                <img src={client.logo} alt={client.name} className="object-contain" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientSlider;