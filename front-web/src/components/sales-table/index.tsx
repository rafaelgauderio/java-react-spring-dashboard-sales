import { useEffect, useMemo, useState } from 'react';
import { FilterData, SalesData, SalesResponse } from '../../types';
import { dateFormat, formatGender, priceFormat } from '../../utils/formatters';
import { buildFilterParameters, makeRequest } from '../../utils/request';
import './styles.css';

type Props = {
  filterData?: FilterData;
};

const extraParameters = {
  page: 0,
  size: 24,
  sort: 'date,desc',
};

// somente passar como dependência do useMemo parâmetros mutáveis
function SalesTable({ filterData }: Props) {
  const params = useMemo(() => buildFilterParameters(filterData, extraParameters), [filterData]);
  const [salesData, setSalesData] = useState<SalesData[]>([]);

  useEffect(() => {
    makeRequest
      .get<SalesResponse>('/sales', { params })
      .then((response) => {
        setSalesData(response.data.content);
      })
      .catch(() => {
        console.error('Erro to fetch sales data');
      });
  }, [params]);

  return (
    <div className="sales-table-container base-card">
      <h2 className="sales-table-title">Vendas recentes</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Data</th>
            <th>Gênero</th>
            <th>Categoria</th>
            <th>Loja</th>
            <th>Forma de Pagamento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale) => (
            <tr key={sale.id}>
              <td>#{sale.id}</td>
              <td>{dateFormat(sale.date)}</td>
              <td>{formatGender(sale.gender)}</td>
              <td>{sale.categoryName}</td>
              <td>{sale.storeName}</td>
              <td>{sale.paymentMethod}</td>
              <td>{priceFormat(sale.total)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
