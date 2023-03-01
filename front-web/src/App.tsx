import Header from './components/header';
import Filter from './filter';
import './App.css';
import SalesByDate from './sales-by-date';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
      </div>
    </>
  );
}

export default App;
