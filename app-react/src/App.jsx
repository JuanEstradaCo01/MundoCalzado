
import './App.css';
import Saludo from "./componentes/ItemListContainer"
import Boton from './componentes/Boton';
import Item from "./componentes/item";
import Flex from "./componentes/item/flex/Flex";
import BootstrapEx from "./componentes/Bootstrap/Bootstrap";


function App() {
  return (
    <div className="App">
      <BootstrapEx/>
      <header className="App-header">
        <Saludo color="orange" letra="black" borde="20%"/>
        <Boton color="orange"/>
        <button onClick={() => { alert("Aca encontraras todo lo que necesitas")}}>¡clickeame!</button>
          <Flex>
            <Item
              img= ""
              titulo="Tenis" 
              precio="75"
              descripcion="Calzado que re va contigo"
            />
            <Item
              img= ""
              titulo="Tenis" 
              precio="75"
              descripcion="Calzado que re va contigo"
            />
            <Item
              img= ""
              titulo="Tenis" 
              precio="75"
              descripcion="Calzado que re va contigo"
            />
            <Item
              img= ""
              titulo="Tenis" 
              precio="75"
              descripcion="Calzado que re va contigo"
            />
          </Flex>
        </header>
    </div>
  );
}

export default App;
