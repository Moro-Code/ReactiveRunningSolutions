import React from "react";
import PropTypes from "prop-types";

export const ImageCardGrid = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[1400px] mx-auto px-4 md:px-8 py-8">
      {children}
    </div>
  );
};

ImageCardGrid.propTypes = {
  children: PropTypes.node.isRequired,
};
