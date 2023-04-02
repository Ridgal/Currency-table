export interface IPosts {
  id: string;
  name: string;
  symbol: string;
};

export type StateProps = {
  loading: boolean;
  posts?: IPosts[];
};

export interface PaginationProps {
  currencyPerPage: number;
  totalCurrency: number | any;
  paginate: (arg0: number) => void;
};
