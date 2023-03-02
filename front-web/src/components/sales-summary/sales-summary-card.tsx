import './styles.css';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';

function SalesSummaryCard() {
  return (
    <div className="sales-summary-card base-card">
      <DoneIcon />
      <h2 className="sales-summary-card-value">399.50</h2>
      <span className="sales-summary-card-label">Média</span>
    </div>
  );
}

export default SalesSummaryCard;
