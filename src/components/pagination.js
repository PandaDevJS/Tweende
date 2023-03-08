import React from "react";

const Pagination = ({ page, handleSetPage }) => {
  let currentPage = page;
  let totalPages = 10;
  const renderPagesHTML = (delta = 2) => {
    const pagesHTML = [];
    const left = currentPage - delta;
    const right = currentPage + delta;
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        i === currentPage ||
        (i >= left && i <= right)
      ) {
        pagesHTML.push(i);
      }
    }
    return pagesHTML;
  };
  const handleClick = (value) => {
    handleSetPage(value);
  };

  return (
    <div className="panel-footer">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {renderPagesHTML().map((value, index) => {
            return (
              <li key={index} className="page-item">
                <a
                  onClick={() => handleClick(value)}
                  className={`page-link page-link-${value} `}
                  href="#"
                >
                  {value}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
export default Pagination;
