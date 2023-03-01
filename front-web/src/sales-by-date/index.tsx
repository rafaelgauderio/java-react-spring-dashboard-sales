import './styles.css';

function SalesByDate() {
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
      </div>
    </div>
  );
}

export default SalesByDate;
