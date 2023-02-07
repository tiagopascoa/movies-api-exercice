import React from "react";
import { ReactComponent as PagPrev } from "../assets/Pagination-Prev.svg";
import { ReactComponent as PagNext } from "../assets/Pagination-Next.svg";
const Pagination = ({
  totalMovies,
  moviesPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pages.push(i);
  }

  const handleClickNext = () => {
    if (currentPage !== pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClickPrev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pagination-btns-wrapper">
      <PagPrev onClick={handleClickPrev} style={{ cursor: "pointer" }} />
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className={
              currentPage === page
                ? "pagination-btn pagination-btn-red"
                : "pagination-btn"
            }
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
      <PagNext onClick={handleClickNext} style={{ cursor: "pointer" }} />
    </div>
  );
};

export default Pagination;
