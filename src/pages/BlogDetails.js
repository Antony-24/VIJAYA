import React from "react";

const BlogDetails = () => {
  return (
    <div className="top-[300px]">
      <div className="max-w-6xl mx-auto px-4 py-16 bg-white">
        {/* Header Image */}
        <div className="w-full mb-10">
          <img
            src={require("../assets/images/blog-1.jpg")}
            alt="Blog Header"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="font-['Gilda_Display'] text-3xl md:text-4xl font-medium mb-8 text-gray-900">
          Spaces are being revolutionized modern architectural marvels.
        </h1>

        {/* Content */}
        <p className="font-['Poppins'] text-base md:text-md text-gray-800 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p className="font-['Poppins'] text-base md:text-md text-gray-800 mb-6">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>

        {/* Section Heading */}
        <h2 className="font-['Gilda_Display'] text-2xl font-medium mb-6 mt-12 text-gray-900">
          Growth and meaning of mechanical technology
        </h2>

        {/* Two Images Side by Side */}
        <div className="flex flex-col gap-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={require("../assets/images/blog-1.jpg")}
              alt="Blog Detail 1"
              className="w-full md:w-1/2 h-64 object-cover rounded-lg"
            />
            <img
              src={require("../assets/images/gallery-1.png")}
              alt="Blog Detail 2"
              className="w-full md:w-1/2 h-64 object-cover rounded-lg"
            />
          </div>

          <p className="font-['Poppins'] text-base md:text-md text-gray-800 mb-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
