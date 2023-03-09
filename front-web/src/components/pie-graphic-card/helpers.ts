import { ApexOptions } from 'apexcharts';

export const buildPieGraphicConfig = (labels: string[] = [], name: string) => {
  return {
    labels,
    noData: {
      text: 'Sem resultados',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#FFF',
        fontSize: '18px',
        fontFamily: 'Roboto, sans-serif',
      },
    },
    colors: ['#3e82f8', '#04d183', '#ffc106', '#ff6b71'],
    legend: {
      show: true,
      floating: false,
      position: 'bottom',
      offsetY: 25,
      labels: {
        colors: ['#b4bed2'],
      },
      fontFamily: 'Roboto, sans-serif',
      fontSize: '19x',
      itemMargin: {
        vertical: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        size: 400,
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 10,
              formatter: function () {
                return name;
              },
            },
            total: {
              show: true,
              showAlways: true,
              fontSize: '25px',
              color: '#ABB1C0',
              fontFamily: 'Roboto, sans-serif',
              formatter: function () {
                return '';
              },
            },
          },
        },
      },
    },
    chart: {
      height: '400px',
    },
  } as ApexOptions;
};
