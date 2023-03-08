import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildPieGraphicConfig } from './helpers';

type Props = {
  series?: number[];
  labels?: string[];
  name: string;
};

// iniciar o labels e series como array vazio
function PieGraphicCard({ series = [], labels = [], name }: Props) {
  return (
    <div className="pie-graphic-card base-card">
      <ReactApexChart
        options={buildPieGraphicConfig(labels, name)}
        series={series}
        type="donut"
        width="400"
        height="400"
      />
    </div>
  );
}

export default PieGraphicCard;
