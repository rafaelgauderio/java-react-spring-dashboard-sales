import Header from './components/header';
import Filter from './components/filter';
import './App.css';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import PieGraphicCard from './components/pie-graphic-card/indext';
import SalesTable from './components/sales-table';
import { useState } from 'react';
import { FilterData } from './types';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByDate filterData={filterData} />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieGraphicCard
            name="Lojas"
            labels={['Foz do Iguaçu', 'Casvavel', 'Curitiba', 'Londrina']}
            series={[25, 35, 25, 15]}
          />
          <PieGraphicCard
            name="Pagamento"
            labels={['Crédito', 'Débito', 'Dinheiro']}
            series={[50, 35, 15]}
          />
        </div>
        <SalesTable />
      </div>
    </>
  );
}

export default App;
