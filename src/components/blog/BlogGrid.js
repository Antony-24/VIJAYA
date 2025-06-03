import React, { useState } from "react";
import blog1 from "../../assets/images/blog-1.jpg";
import nw from "../../assets/images/nw.svg";
import nw1 from "../../assets/images/nw1.svg";
import nw2 from "../../assets/images/nw2.svg";
import nw3 from "../../assets/images/nw3.svg";
import { Pagination } from "./Pagination";
import { BlogCard } from "./BlogCard";

const articles = [
  {
    id: 1,
    tag: "News",
    image: nw,
    date: "December 7, 2024",
    description:
      "Spaces are being revolutionized modern architectural marvels.",
  },
  {
    id: 2,
    tag: "Blog",
    image: blog1,
    date: "December 7, 2024",
    description:
      "Spaces are being revolutionized modern architectural marvels.",
  },
  {
    id: 3,
    tag: "News",
    image: nw1,
    date: "December 7, 2024",
    description:
      "Spaces are being revolutionized modern architectural marvels.",
  },
  {
    id: 4,
    tag: "Blog",
    image: nw2,
    date: "December 7, 2024",
    description:
      "Spaces are being revolutionized modern architectural marvels.",
  },
  {
    id: 5,
    tag: "News",
    image: nw3,
    date: "December 7, 2024",
    description:
      "Spaces are being revolutionized modern architectural marvels.",
  },
  {
    id: 6,
    tag: "Blog",
    image: blog1,
    date: "December 7, 2024",
    description:
      "Spaces are being revolutionized modern architectural marvels.",
  },
  {
    id: 7,
    tag: "News",
    image: nw,
    date: "December 7, 2024",
    description:
      "Spaces are being revolutionized modern architectural marvels.",
  },
  {
    id: 8,
    tag: "Blog",
    image: nw1,
    date: "December 7, 2024",
    description:
      "Spaces are being revolutionized modern architectural marvels.",
  },
  {
    id: 9,
    tag: "News",
    image: nw2,
    date: "December 7, 2024",
    description:
      "Spaces are being revolutionized modern architectural marvels.",
  },
  {
    id: 10,
    tag: "Blog",
    image: nw3,
    date: "December 7, 2024",
    description:
      "Spaces are being revolutionized modern architectural marvels.",
  },
  {
    id: 11,
    tag: "News",
    image: blog1,
    date: "December 7, 2024",
    description:
      "Spaces are being revolutionized modern architectural marvels.",
  },
  {
    id: 12,
    tag: "Blog",
    image: nw,
    date: "December 7, 2024",
    description:
      "Spaces are being revolutionized modern architectural marvels.",
  },
];

export function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 8;
  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <section className="py-16 max-w-[90%] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {currentArticles.map((item, idx) => (
          <BlogCard key={idx} {...item} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}
