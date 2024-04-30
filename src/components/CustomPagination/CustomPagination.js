import React, { useState } from 'react';
import styles from './CustomPagination.module.css'

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (page) => {
    if (page === currentPage) {
      return; // Do nothing if the clicked page is the current page
    }
    setActivePage(page)
    onPageChange(page); // Call the onPageChange callback with the new page
  };

  return (
    <nav className={`${styles.CustomPagination}`} >
      <ul className="pagination justify-content-center flex-sm-wrap pagination-sm">
        <li className={`page-item ${isFirstPage ? 'disabled' : ''} ${styles.previousPage}`}>
          <span
            className="page-link"
            onClick={() => handlePageChange(activePage - 1)}
            disabled={isFirstPage}
          >
            &laquo;
          </span>
        </li>

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          const isActive = page === activePage;

          return (
            <li
              key={page}
              className={`page-item activePage ${isActive ? styles.active : ''}`}
            >
              <span
                className={`page-link ${styles.linkSpan} ${isActive ? styles.active : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </span>
            </li>
          );
        })}

        <li className={`page-item ${isLastPage ? 'disabled' : ''} ${styles.nextPage}`}>
        {/* <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a> */}
          <span
            className="page-link"
            onClick={() => handlePageChange(activePage + 1)}
            disabled={isLastPage}
          >
            &raquo;
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default CustomPagination;
