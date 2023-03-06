import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { chartOptions } from './helpers';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/request';

const initialData = [
  {
    x: '2022-03-25',
    y: 150,
  },
  {
    x: '2022-04-25',
    y: 200,
  },
  {
    x: '2022-05-25',
    y: 90,
  },
  {
    x: '2022-06-25',
    y: 210,
  },
  {
    x: '2022-07-25',
    y: 82,
  },
  {
    x: '2022-08-25',
    y: 250,
  },
  {
    x: '2022-09-25',
    y: 174,
  },
];

function SalesByDate() {
  // criar um estado para contar os valores da data e soma por vendedor
  const [SalesByDate, setSalesByDate] = useState();

  // useEffect para inicializar o component

  useEffect(() => {
    makeRequest
      .get('/sales/by-date?minDate=2017-01-01&maxDate=2017-01-31&gender=MALE')
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h5 className="sales-by-date-title">Evolução de Vendas</h5>
        <span className="sales-by-date-period">01/12/2022 a 31/01/2023</span>
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
          <h2 className="sales-by-date-quantity">597.995,00</h2>
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
            series={[{ name: 'Vendas', data: initialData }]}
          />
        </div>
      </div>
    </div>
  );
}

export default SalesByDate;
