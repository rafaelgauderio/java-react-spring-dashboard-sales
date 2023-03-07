import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildGraphicSeries, chartOptions, sumSalesByData } from './helpers';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/request';
import { SalesByDate, GraphicSeriesData, FilterData } from '../../types';
import { dateFormat, priceFormat } from '../../utils/formatters';

type Props = {
  filterData?: FilterData;
};

function SalesByDateComponent({ filterData }: Props) {
  // criar um estado para contar os valores da data e soma por vendedor.
  // iniciando o tipo com uma lista vazia
  const [graphicSeries, setGraphicSeries] = useState<GraphicSeriesData[]>([]);
  const [totalSalesSum, setTotalSalesSum] = useState(0);

  // useEffect para inicializar o component
  useEffect(() => {
    makeRequest
      .get<SalesByDate[]>('/sales/by-date?minDate=2017-01-01&maxDate=2017-01-31&gender=MALE')
      .then((response) => {
        const newGraphicSeries = buildGraphicSeries(response.data);
        setGraphicSeries(newGraphicSeries);
        //console.log(response.data);

        const newTotalSalesSum = sumSalesByData(response.data);
        setTotalSalesSum(newTotalSalesSum);
      })
      .catch(() => {
        console.error('Error when try to fetch sales by date');
      });
  }, []);

  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h5 className="sales-by-date-title">Evolução de Vendas</h5>
        {filterData?.dates && (
          <span className="sales-by-date-period">
            {dateFormat(filterData?.dates?.[0])} até {dateFormat(filterData?.dates?.[1])}
          </span>
        )}
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
          <h2 className="sales-by-date-quantity">{priceFormat(totalSalesSum)}</h2>
          <span className="sales-by-date-quantity-label">Vendas no período</span>
          <span className="sales-by-date-quantity-description">
            Gráfixo ao lado exibe as vendas de todas as unidades
          </span>
        </div>
        <div className="sales-by-date-graphic">
          <ReactApexChart
            options={chartOptions}
            type="bar"
            widht="100%"
            height={250}
            series={[{ name: 'Vendas', data: graphicSeries }]}
          />
        </div>
      </div>
    </div>
  );
}

export default SalesByDateComponent;
