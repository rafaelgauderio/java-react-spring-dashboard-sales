import Header from './components/header';
import Filter from './components/filter';
import './App.css';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
        </div>
      </div>
    </>
  );
}

export default App;
