import Header from './components/header';
import Filter from './components/filter';
import './App.css';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import PieGraphicCard from './components/pie-graphic-card/indext';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieGraphicCard
            name="Lojas"
            labels={['Foz do Iguaçu', 'Casvavel', 'Curitiba', 'Londrina']}
            series={[25, 35, 25, 15]}
          />
          <PieGraphicCard
            name="Pagamento"
            labels={['Crédito', 'Débito', 'Dinheiro']}
            series={[50, 35, 15]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
