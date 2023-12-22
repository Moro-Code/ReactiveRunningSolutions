import React from "react";
import { HeroListItem } from "@/components/HeroListItem";
import PropTypes from "prop-types";

export const HeroList = ({ items }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {items.map((item, index) => (
        <HeroListItem
          key={index}
          itemNumber={item.itemNumber}
          itemText={item.itemText}
        />
      ))}
    </div>
  );
};

HeroList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      itemNumber: PropTypes.string.isRequired,
      itemText: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
