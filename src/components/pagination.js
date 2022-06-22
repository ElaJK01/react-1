import React from "react";
import { divide, map, range } from "ramda";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = range(1, Math.ceil(divide(totalItems, itemsPerPage)));

  return (
    <div className="card-list-container__floating-panel">
      {map(
        (number) => (
          <a
            onClick={() => paginate(number)}
            key={number}
            className="link floating-panel__btn"
            href="#"
          >
            {number}
          </a>
        ),
        pageNumbers
      )}
    </div>
  );
};

export default Pagination;
