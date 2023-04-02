import { PaginationProps } from "../../../types";

const Pagination: React.FC<PaginationProps> = ({ currencyPerPage, totalCurrency, paginate }) => {
  
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalCurrency / currencyPerPage); i++) {
    pages.push(i)
  };
  
  return (
    <footer>
      <div>
        <nav>
          <ul className="pagination pagination-sm">
            {pages.map((number, id) => (
              <a href="#" key={id} className="page-link" onClick={() => paginate(number)}>
                {number}
              </a>
            ))}
            </ul>
          </nav>
      </div>
    </footer>
  );
};

export { Pagination };