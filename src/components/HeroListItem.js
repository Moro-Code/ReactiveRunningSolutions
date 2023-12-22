import React from "react";
import PropTypes from "prop-types";

export const HeroListItem = ({ itemNumber, itemText }) => {
  return (
    <div className="flex items-center my-2">
      <p className="text-responsive-h1 text-red-700 mx-2">{itemNumber}.</p>
      <p className="text-responsive-p-mobile md:text-responsive-p text-white">
        {itemText}
      </p>
    </div>
  );
};

HeroListItem.propTypes = {
  itemNumber: PropTypes.string.isRequired,
  itemText: PropTypes.string.isRequired,
};
