import React from "react";
import PropTypes from "prop-types";
export const Quote = ({ quote, author }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-red-700 py-4">
      <q className="text-responsive-h3 text-white font-bold text-center">
        {quote}
      </q>
      <p className="text-responsive-h3 text-white font-bold text-center mt-2">
        - {author}
      </p>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
