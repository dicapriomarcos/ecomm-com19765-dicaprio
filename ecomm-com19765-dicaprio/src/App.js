import './App.css';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
//gitimport ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
        <Header />
     {/*<ItemListContainer greeting="Listado de productos" /> */} 
      <ItemDetailContainer />
    </div>
  );
}

export default App;
