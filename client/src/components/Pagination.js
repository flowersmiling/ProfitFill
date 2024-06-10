import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
const Pagination = ({ data, itemsPerPage, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const handlePageChange = (page) => {
        setCurrentPage(page);
        onPageChange(page);
    };
    const renderPaginationButtons = () => {
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(_jsx("button", { onClick: () => handlePageChange(i), className: `mx-1 px-2 py-1 rounded ${i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`, children: i }, i));
        }
        return buttons;
    };
    return (_jsx("div", { className: "flex justify-center mt-4", children: renderPaginationButtons() }));
};
export default Pagination;
