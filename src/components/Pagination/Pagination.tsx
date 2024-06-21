import React, { ChangeEvent } from 'react';

function Pagination({
    itemsPerPage,
    setItemsPerPage,
    currentPage,
    totalPages,
    onPageChange
}:{
  itemsPerPage: number,
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>,
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void;
}): JSX.Element {
  const handleItemsPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <span className="mr-2">Show</span>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="border rounded px-2 py-1"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span className="ml-2">per page</span>
      </div>
      
      <div className="flex items-center">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="flex items-center px-4 py-2 rounded mr-2 disabled:opacity-50"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        
        <span className="mx-4">
          Previous
        </span>
        
        <span className="mx-4">
          Page {currentPage} of {totalPages}
        </span>
        
        <span className="mx-4">
          Next
        </span>
        
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="flex items-center px-4 py-2 rounded ml-2 disabled:opacity-50"
        >
          <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Pagination;