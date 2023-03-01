import Header from './components/header';
import Filter from './filter';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
      </div>
    </>
  );
}

export default App;
