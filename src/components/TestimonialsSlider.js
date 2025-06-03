// components/TestimonialsSlider.js

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import avatar from '../assets/images/anime3.svg'; // Replace with actual image path

const testimonials = [
  {
    name: 'Amanda Smith',
    title: 'Founder of Mangcoding',
    content:
      'Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving.',
    image: avatar,
  },
  {
    name: 'Amanda Smith',
    title: 'Founder of Mangcoding',
    content:
      'Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving.',
    image: avatar,
  },
  {
    name: 'Amanda Smith',
    title: 'Founder of Mangcoding',
    content:
      'Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving.',
    image: avatar,
  },
  {
    name: 'Amanda Smith',
    title: 'Founder of Mangcoding',
    content:
      'Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving.',
    image: avatar,
  },
];

const TestimonialsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: '15%', // medium spacing to show partial sides
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    beforeChange: (_, next) => setActiveSlide(next),
    dots: true,
    appendDots: (dots) => (
      <div className="flex justify-center mt-8 space-x-2">{dots}</div>
    ),
    customPaging: (i) => (
      <div
        className={`w-6 h-2 mt-6 rounded-sm ${
          i === activeSlide ? 'bg-yellow-600' : 'bg-gray-300'
        }`}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: '12%',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '8%',
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-white w-full overflow-hidden">
      <div className="text-center mb-12 px-4">
        <p className="text-sm font-semibold tracking-widest text-yellow-600 uppercase">
          Testimonial
        </p>
        <h2 className="text-4xl font-serif font-semibold text-gray-800 mt-2">
          True Stories Of Our Clients
        </h2>
      </div>

      <div className="-mx-2">
        <Slider {...settings}>
          {testimonials.map((item, index) => {
            const isActive = index === activeSlide;
            return (
              <div key={index} className="px-2">
                <div
                  className={`transition-all duration-500 w-[90%] mx-auto rounded-xl p-6 shadow-sm ${
                    isActive
                      ? 'bg-yellow-600 text-white'
                      : 'bg-[#f9f6f1] text-gray-800'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 rounded-md object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="text-sm">{item.title}</p>
                    </div>
                    <div className="ml-auto text-4xl font-bold opacity-20 leading-none">“</div>
                  </div>
                  <p className="text-sm">{item.content}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSlider;