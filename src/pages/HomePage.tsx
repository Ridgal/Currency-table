import { Header } from "../components/Header/Header";
import { Table } from "../components/Table/Table";

const HomePage = () => {
  return (
    <div className="home shadow-lg bg-body-tertiary rounded">
      <Header />
      <Table />
    </div>
  );
};

export { HomePage };
