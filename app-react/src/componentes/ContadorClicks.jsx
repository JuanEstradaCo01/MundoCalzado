import React, {useState} from "react";

function ContarClick(props){

    let [contador, setCount] = useState(0);

    /*function handleClick(){
        console.log("Agregado")
        contador = setCount(contador + 1)
    }

    function handleSubs(){
        console.log("Eliminado")
        contador = setCount(contador - 1)
    }*/

    return(
    <div>
        <button className="contarMenos" onClick={() => setCount(contador-1)}>-</button>
        <span> {contador} </span>
        <button className="contarMas" onClick={() => setCount(contador+1)}>+</button>
    </div>)
}

export default ContarClick;
