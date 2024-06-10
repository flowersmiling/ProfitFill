import { useState } from 'react';

const Pagination = ({ data, itemsPerPage, onPageChange }: { data: any[], itemsPerPage: number, onPageChange: (page: number) => void }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
};

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-1 px-2 py-1 rounded ${
            i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="flex justify-center mt-4">
      {renderPaginationButtons()}
    </div>
  );
};

export default Pagination;
