import React from "react";

function Banner({ title }) {
  return (
    <div className="w-full h-[200px] flex items-center relative bg-black bg-blend-darken bg-opacity-45 mb-12">
      <div className="container mx-auto">
        <h1 className="text-5xl text-white">{title}</h1>
      </div>

      <img
        src="/banner.jpg"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
    </div>
  );
}

export default Banner;
