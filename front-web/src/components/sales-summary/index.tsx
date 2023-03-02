import SalesSummaryCard from './sales-summary-card';
import './styles.css';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as ColumnChartIcon } from '../../assets/column-chart-icon.svg';

function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={520} label="Média" icon={<DoneIcon />} />
      <SalesSummaryCard value={210} label="Quantidade" icon={<SyncIcon />} />
      <SalesSummaryCard value={90} label="Mínima" icon={<ColumnChartIcon />} />
      <SalesSummaryCard value={715} label="Máxima" icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;
