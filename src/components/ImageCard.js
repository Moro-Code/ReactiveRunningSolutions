import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

export const ImageCard = ({ image, imageAlt, children }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-700/90 w-4/5 md:w-1/2 p-8 md:p-12 min-h-fit m-2">
      <Image
        src={image}
        alt={imageAlt}
        width={200}
        height={200}
        className="rounded-full"
      />
      {children}
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
