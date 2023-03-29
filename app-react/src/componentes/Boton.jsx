import React from "react"
import { useState } from "react"


function Boton(props){

    let [color, setColor] = useState("yellow")

    function cambioDeColor() {
        alert ("Se cambio de color")
        setColor("white")
    }
    

    return (
        <button style={{backgroundColor: color}}  onClick={cambioDeColor}> {props.children}Mas informacion</button>
    )
}

export default Boton;

