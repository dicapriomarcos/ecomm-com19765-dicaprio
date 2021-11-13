import './App.css';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import Footer from './layout/Footer/Footer';
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
<BrowserRouter>
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
</BrowserRouter>
  );
}

export default App;
