import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer greeting="Listado de productos" />
    </div>
  );
}

export default App;
