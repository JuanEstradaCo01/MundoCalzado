import './App.css';
import NavBar from './componentes/Nav/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { Cartprovider } from './context/cartContext';
import Carrito from './componentes/Carrito/Carrito';

export default function App() {
  return (
    <div className="App">

      <Cartprovider>
        <BrowserRouter>

          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoriaid" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>Error 404: Pagina no encontrada</h1>} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>

        </BrowserRouter>
      </Cartprovider>

    </div>
  );
}