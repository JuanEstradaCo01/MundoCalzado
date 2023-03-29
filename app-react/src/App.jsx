import './App.css';
import NavBar from './componentes/Nav/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Boton from './componentes/Boton';


function App() {
  return (
    <div className="App">
      <BrowserRouter>  

          
        <NavBar/>
        <Boton/>
        <Routes>   
          <Route path="/" element={ <ItemListContainer/> } /> 
          <Route path="/category/:categoryid" element={ <ItemListContainer/> } /> 
          <Route path="/item/:id" element={ <ItemDetailContainer/> } />
          <Route path="*" element= { <h1>Error 404: Pagina no encontrada</h1> } />         
        </Routes>

        
      </BrowserRouter>
    </div>
  );
}

export default App;
