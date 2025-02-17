import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ totalPages, currentPage, paginate }) => {
    // Generate an array of page numbers for pagination buttons
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="pagination flex items-center gap-4">
            {/* Previous button */}
            <button
                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                </svg>
                Previous
            </button>

            {/* Page buttons */}
            <div className="flex items-center gap-2">
                {pages.map((page) => (
                    <button
                        key={page}
                        className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-md text-center align-middle font-sans text-xs font-medium uppercase ${currentPage === page ? 'bg-gray-900 text-white shadow-md shadow-gray-900/10' : 'text-gray-900'} transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                        type="button"
                        onClick={() => paginate(page)}
                    >
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            {page}
                        </span>
                    </button>
                ))}
            </div>

            {/* Next button */}
            <button
                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-md select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                </svg>
            </button>
        </div>
    );
};

Pagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired,
};

export default Pagination;
