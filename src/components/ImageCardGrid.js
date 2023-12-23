import React from "react";
import PropTypes from "prop-types";

export const ImageCardGrid = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-fit w-full p-8">
      {children}
    </div>
  );
};

ImageCardGrid.propTypes = {
  children: PropTypes.node.isRequired,
};
