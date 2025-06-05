import React from 'react';
import nw from '../assets/images/nw.svg';
import nw1 from '../assets/images/nw1.svg';
import nw2 from '../assets/images/nw2.svg';
import nw3 from '../assets/images/nw3.svg';

const articles = [
  {
    title: 'News',
    date: 'December 7, 2024',
    description: 'Spaces are being revolutionized modern architectural marvels.',
    image: nw,
  },
  {
    title: 'Blog',
    date: 'December 7, 2024',
    description: 'Spaces are being revolutionized modern architectural marvels.',
    image: nw2,
  },
  {
    title: 'News',
    date: 'December 7, 2024',
    description: 'Spaces are being revolutionized modern architectural marvels.',
    image: nw1,
  },
  {
    title: 'Blog',
    date: 'December 7, 2024',
    description: 'Spaces are being revolutionized modern architectural marvels.',
    image: nw3,
  },
];

const NewsAndBlogs = () => {
  return (
    <section className="py-20 px-6 bg-[#fefcf8]">
      <div className="flex justify-between items-center flex-wrap mb-10">
        <div>
          <p className="text-sm font-semibold text-yellow-600 uppercase tracking-widest">
            Latest News & Press
          </p>
          <h2 className="text-4xl font-serif font-semibold text-gray-800 mt-1">
            News & Blogs
          </h2>
        </div>
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full mt-4 md:mt-0 flex items-center space-x-2">
          <span>View More</span>
          <span>↗</span>
        </button>
      </div>

      {/* Mobile Scroll Slider */}
      <div className="block md:hidden overflow-x-auto">
        <div className="flex space-x-4 snap-x snap-mandatory scroll-smooth">
          {articles.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[80%] snap-center bg-white rounded-lg shadow"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover rounded"
                />
                <div className="absolute top-0 left-0 bg-yellow-600 text-white px-4 py-2 rounded-br-md text-sm font-semibold">
                  {item.title} →
                </div>
              </div>
              <div className="p-4">
                <p className="font-semibold text-sm">{item.date}</p>
                <p className="text-lg text-gray-700 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover rounded"
              />
              <div className="absolute top-0 left-0 bg-yellow-600 text-white px-4 py-2 rounded-br-md text-sm font-semibold">
                {item.title} →
              </div>
            </div>
            <div className="p-4">
              <p className="font-semibold text-sm">{item.date}</p>
              <p className="text-lg text-gray-700 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsAndBlogs;
