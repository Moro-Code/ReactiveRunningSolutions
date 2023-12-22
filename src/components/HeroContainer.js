import React from "react";
import PropTypes from "prop-types";

export const HeroContainer = ({
  children,
  backroundImage,
  backgroundColor,
}) => {
  if (backroundImage) {
    return (
      <div
        className="w-full flex flex-col justify-center items-center min-h-fit p-8"
        style={{
          backgroundImage: `url(${backroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {children}
      </div>
    );
  } else if (backgroundColor) {
    return (
      <div
        className={`w-full flex flex-col justify-center items-center min-h-fit p-8 ${backgroundColor}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col justify-center items-center min-h-fit p-8">
      {children}
    </div>
  );
};

HeroContainer.propTypes = {
  backroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};
