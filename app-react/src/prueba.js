import React, { useState, useEffect } from "react";
import "./style.css"

/*Trayendo json de una  API*/ 

function Aplicacion(){
    const [ pokemones, setPokemones ] = useState([])
    console.log("render", pokemones)


    useEffect(
        () =>{
            fetch(" https://pokeapi.co/api/v2/pokemon")
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setPokemones = json
    });
        },
        []
    )
}

return (
    <div>
        <h1>POKEMON</h1>
        <div>
            {
                pokemones.map( pokemon => (
                    <div>
                        <div>
                            <h5>{pokemon.name}</h5>
                            <a href="#">Ver los detalles</a>
                        </div>
                    </div>
                ))
            }
        </div>
    </div> 
)

export default Aplicacion;



