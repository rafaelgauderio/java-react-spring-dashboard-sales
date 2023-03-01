import { ApexOptions } from 'apexcharts';

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
