import { useEffect, useState } from "react";

import { Pagination } from "./Pagination/Pagination";
import { Loader } from "../Loader/Loader";

import { API_URL } from "../../utils/constant";
import { StateProps } from "../../types";

const Table: React.FC = () => {

  const [state, setState] = useState<StateProps>({ loading: false, posts: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [currencyPerPage] = useState(10);
  
  useEffect(() => {
    const getCurrency = async () => {
      setState({ loading: true });
      await fetch(`${API_URL}?vs_currency=usd&order=market_cap_desc&per_page=250&page=1`)
        .then((response) => response.json())
        .then((data) => setState({ loading: false, posts: data }));
    };
    getCurrency();
  }, [])

  function getRowClassName(index: number) {
    if (index < 5 && currentPage === 1) {
      return "bg-primary text-white table__tr"
    } else {
      return "table__tr"
    }
  };

  function getSymbolClassName(item: any, index: number) {
    if (item.symbol === 'usdt') {
      return 'bg-success text-white table__tr'
    } else {
      return getRowClassName(index)
    }
  };

  const lastCurrencyIndex = currentPage * currencyPerPage;
  const firstCurrencyIndex = lastCurrencyIndex - currencyPerPage;
  const currentCurrency = state.posts?.slice(firstCurrencyIndex, lastCurrencyIndex);

  function paginate(pages: any) {
    setCurrentPage(pages);
  };

  if (state.loading) {
    return <Loader />
  };
  
  return (
    <section style={{width: '95%'}}>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col" className="bg-dark text-white">ID</th>
            <th scope="col" className="bg-dark text-white">Symbol</th>
            <th scope="col" className="bg-dark text-white">Name</th>
          </tr>
        </thead>
        <tbody>
          {currentCurrency?.slice(0, 5).map((item, index) => (
            <tr key={item.id} className={getSymbolClassName(item, index)}>
              <th scope="row">{item.id}</th>
              <td>{item.symbol}</td>
              <td>{item.name}</td>
            </tr>
          ))}
          {currentCurrency?.slice(5).map((item) => (
            <tr key={item.id} className={item.symbol === 'usdt' ? 'bg-success text-white table__tr' : 'table__tr'}>
              <th scope="row">{item.id}</th>
              <td>{item.symbol}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currencyPerPage={currencyPerPage}
        totalCurrency={state.posts?.length}
        paginate={paginate} />
    </section>
  );
};

export { Table };
