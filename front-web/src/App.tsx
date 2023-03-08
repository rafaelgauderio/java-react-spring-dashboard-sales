import Header from './components/header';
import Filter from './components/filter';
import './App.css';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import PieGraphicCard from './components/pie-graphic-card/indext';
import SalesTable from './components/sales-table';
import { useEffect, useMemo, useState } from 'react';
import { FilterData, PieGraphicConfig, SalesByPaymentMethodData, SalesByStoreData } from './types';
import { buildFilterParameters, makeRequest } from './utils/request';
import { buildSalesByPaymentMethodGraphic, buildSalesByStoreGraphic } from './helpers';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByStoreData, setSalesByStoreData] = useState<PieGraphicConfig>();
  const [salesByPaymontmethodData, setSalesByPaymontMethodData] = useState<PieGraphicConfig>();

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

  useEffect(() => {
    makeRequest
      .get<SalesByPaymentMethodData[]>('sales/by-payment-method', { params })
      .then((resposta) => {
        const newSalesByPaymentMethodData = buildSalesByPaymentMethodGraphic(resposta.data);
        setSalesByPaymontMethodData(newSalesByPaymentMethodData);
      })
      .catch(() => {
        console.error('Erros to fetch sales by payment method pie graphic');
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
            labels={salesByPaymontmethodData?.labels}
            series={salesByPaymontmethodData?.series}
          />
        </div>
        <SalesTable filterData={filterData} />
      </div>
    </>
  );
}

export default App;
