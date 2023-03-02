import './styles.css';
import React from 'react';

// componente precisa receber parâmetros via props para ficar dinâmico
type Props = {
  label: string;
  value: number;
  icon: React.ReactNode;
};

function SalesSummaryCard({ label, value, icon }: Props) {
  return (
    <div className="sales-summary-card base-card">
      {icon}
      <h2 className="sales-summary-card-value">{value}</h2>
      <span className="sales-summary-card-label">{label}</span>
    </div>
  );
}

export default SalesSummaryCard;
