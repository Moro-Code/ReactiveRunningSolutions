import React from "react";
import PropTypes from "prop-types";

export const HeroListItem = ({ itemNumber, itemText }) => {
  return (
    <div className="flex items-center my-8">
      <p className="w-1/3 text-responsive-h4 text-red-700 self-start mx-3">
        {itemNumber}.
      </p>
      <p className="w-2/3 text-responsive-p-mobile md:text-responsive-p text-white">
        {itemText}
      </p>
    </div>
  );
};

HeroListItem.propTypes = {
  itemNumber: PropTypes.string.isRequired,
  itemText: PropTypes.string.isRequired,
};
