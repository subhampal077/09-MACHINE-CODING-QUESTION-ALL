import React from "react";

const Pagination = ({ currentPage, totalPages = 5, handlePage }) => {
  function generatePages() {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => {
          handlePage(currentPage - 1);
        }}
        className="pagination-btn"
      >
        Prev
      </button>

      {generatePages().map((page) => (
        <button
          onClick={() => handlePage(page)}
          className="pagination-btn"
          key={page}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePage(currentPage + 1)}
        className="pagination-btn"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
