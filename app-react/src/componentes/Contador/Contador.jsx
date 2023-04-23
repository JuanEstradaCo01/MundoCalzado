import React, {useState} from "react";
import { Link } from "react-router-dom";

function Contador(props){

    let [contador, setCount] = useState(0);

    if(contador > 0 ){
        function handleSumar(){
            setCount(contador + 1)
        }
    
        function handleRestar(){
            setCount(contador - 1)
        }
        return(
            <div className="count">
                <div className="contenedorCounter">
                    <button className="contarMenos" onClick={handleRestar}>-</button>
                    <span className="spanCounter">{contador}</span>
                    <button className="contarMas" onClick={handleSumar}>+</button>
                </div>
                <button className="botonAgregar" onClick={() => {props.onAddToCart(contador)} }>Agregar al carrito</button>
            </div>
            )
    }else{
        console.log("Error: operacion invalida") 
        function handleSumar(){
            setCount(contador + 1)
        }
    
        function handleRestar(){
            setCount(contador)
        }
        return(
            <div className="count">
                <div className="contenedorCounter">
                    <button className="contarMenos" onClick={handleRestar} disabled>-</button>
                    <span className="spanCounter">{contador}</span>
                    <button className="contarMas" onClick={handleSumar}>+</button>
                </div>
                <button className="botonAgregar" disabled>Agregar al carrito</button>
            </div>
            )
}
}

export default Contador;




