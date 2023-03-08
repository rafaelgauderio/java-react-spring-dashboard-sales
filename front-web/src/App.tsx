import Header from './components/header';
import Filter from './components/filter';
import './App.css';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import PieGraphicCard from './components/pie-graphic-card/indext';
import SalesTable from './components/sales-table';
import { useEffect, useMemo, useState } from 'react';
import { FilterData, PieGraphicConfig, SalesByStoreData } from './types';
import { buildFilterParameters, makeRequest } from './utils/request';
import { buildSalesByStoreGraphic } from './helpers';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByStoreData, setSalesByStoreData] = useState<PieGraphicConfig>();

  const params = useMemo(() => buildFilterParameters(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByStoreData[]>('sales/by-store', { params })
      .then((response) => {
        const newSalesByStoreData = buildSalesByStoreGraphic(response.data);
        setSalesByStoreData(newSalesByStoreData);
      })
      .catch(() => {
        console.error('Erros to fetch sales by store pie graphic');
      });
  }, [params]);

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
          <SalesSummary filterData={filterData} />
          <PieGraphicCard
            name="Lojas"
            labels={salesByStoreData?.labels}
            series={salesByStoreData?.series}
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
