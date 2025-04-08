import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

export const ImageCard = ({ image, imageAlt, children }) => {
  return (
    <div className="flex flex-col justify-start items-center bg-gradient-to-br from-slate-800 to-slate-700 w-[95%] md:w-[85%] lg:w-[75%] p-6 md:p-10 m-2 min-h-[400px] md:min-h-[500px] rounded-xl shadow-xl transform hover:scale-[1.02] transition-all duration-300">
      <div className="relative w-[250px] h-[250px] mb-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-red-500/50">
        <Image
          src={image}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform hover:scale-110 duration-500"
        />
      </div>
      <div className="prose prose-lg prose-invert max-w-none">
        {children}
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
