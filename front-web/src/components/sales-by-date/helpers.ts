import { ApexOptions } from 'apexcharts';
import { SalesByDate } from '../../types';

export const chartOptions = {
  legend: {
    show: false,
  },
  noData: {
    text: 'Sem resultados',
    align: 'center',
    verticalAlign: 'middle',
    offsetY: -15,
    style: {
      color: '#FFF',
      fontSize: '19px',
      fontFamily: 'Roboto, sans-serif',
    },
  },
  chart: {
    foreColor: '#b4bed2',
    height: 250,
    with: 1000,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '22%',
      endingShape: 'rounded',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
  },
  xaxis: {
    type: 'datetime',
  },
  yaxis: {},
  fill: {
    opacity: 1,
    colors: ['#3e82f7'],
  },
  tooltip: {
    theme: 'dark',
    y: {
      formatter: function (val: number) {
        return `R$ ${val}`;
      },
    },
  },
} as ApexOptions;

// conveter dados
export const buildGraphicSeries = (salesByDate: SalesByDate[] = []) => {
  // usar função de alta ordem map para transformar lista de SalesByDate em um objeto
  // tem que converter para um estrutura de dados que o react-apexcharts reconheça, como data no x e numero no y
  return salesByDate.map((sale) => ({
    x: sale.date,
    y: sale.sum,
  }));
};

export const sumSalesByData = (salesByDate: SalesByDate[] = []) => {
  // compatando todos os valores de uma lista em um valor numérico
  return salesByDate.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.sum;
  }, 0);
};
