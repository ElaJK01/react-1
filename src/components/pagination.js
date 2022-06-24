import React, { useMemo } from "react";
import { add, divide, map, range, subtract } from "ramda";
import { DOTS } from "../constants";

const paginationCount = (
  totalItems,
  itemsPerPage,
  adjacentPages,
  currentPage
) => {
  const pageNumbers = Math.ceil(divide(totalItems, itemsPerPage));

  const visiblePageNumbers = adjacentPages + 5;

  if (visiblePageNumbers >= pageNumbers) {
    return range(1, pageNumbers);
  }

  const leftBorderPagesIndex = Math.max(
    subtract(currentPage, adjacentPages),
    1
  );

  const rightBorderPagesIndex = Math.min(
    add(currentPage, adjacentPages),
    pageNumbers
  );

  const shouldShowLeftDots = leftBorderPagesIndex > 2;
  const shouldShowRightDots = rightBorderPagesIndex < pageNumbers - 2;

  const firstPageIndex = 1;
  const lastPageIndex = pageNumbers;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * adjacentPages;
    const leftRange = range(1, leftItemCount);
    return [...leftRange, DOTS, pageNumbers];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * adjacentPages;
    const rightRange = range(pageNumbers - rightItemCount + 1, pageNumbers);
    return [firstPageIndex, DOTS, ...rightRange];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = range(leftBorderPagesIndex, rightBorderPagesIndex);
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
  }
};

const Pagination = (props) => {
  const {
    itemsPerPage,
    totalItems,
    paginate,
    currentPage,
    adjacentPages = 1,
  } = props;

  const paginationRange = useMemo(
    () => paginationCount(totalItems, itemsPerPage, adjacentPages, currentPage),
    [totalItems, itemsPerPage, adjacentPages, currentPage]
  );

  const onPrevious = () => {
    paginate(currentPage - 1);
  };

  const onNext = () => {
    paginate(currentPage + 1);
  };

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="card-list-container__floating-panel">
      <a
        className={
          currentPage === 1
            ? "disabled__btn link floating-panel__btn arrow-up"
            : "link floating-panel__btn arrow-up"
        }
        onClick={onPrevious}
      />
      {map((page) => {
        if (page === DOTS) {
          return (
            <a
              className={
                currentPage === page
                  ? "link floating-panel__btn active"
                  : "link floating-panel__btn"
              }
            >
              &#8230;
            </a>
          );
        }
        return (
          <a
            onClick={() => paginate(page)}
            key={page}
            className={
              currentPage === page
                ? "link floating-panel__btn active"
                : "link floating-panel__btn"
            }
          >
            {page}
          </a>
        );
      }, paginationRange)}
      <a
        className={
          currentPage === lastPage
            ? "disabled__btn link floating-panel__btn arrow-down active"
            : "link floating-panel__btn arrow-down"
        }
        onClick={onNext}
      />
    </div>
  );
};

export default Pagination;
