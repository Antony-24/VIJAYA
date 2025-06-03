import React from "react";
import { HeaderSection } from "../components/blog/HeaderSection";
import { BlogGrid } from "../components/blog/BlogGrid";

function Blog() {
  return (
    <div>
      {/* Header Section */}
      <HeaderSection />

      {/* Blog Grid */}
      <BlogGrid />
    </div>
  );
}

export default Blog;
