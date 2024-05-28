import React from 'react';

const Pagination = ({ totalCount, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalCount / 10);

  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`px-3 py-1 border rounded ${i === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center mt-5 space-x-2">
      {renderPageNumbers()}
    </div>
  );
};

export default Pagination;