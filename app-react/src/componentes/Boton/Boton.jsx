import React from "react"
import { useState, useEffect } from "react"


function Escuchar(){
    function CLickEscuchar(){
        console.log("clickea")
    }

    useEffect( () => {
        let boton = document.getElementById("buton")
        console.log(boton)
        boton.addEventListener("click", CLickEscuchar)
    }, [])

    return (
        <button id="buton">Click</button>
    )

}

/*
function Boton(props){

    let [color, setColor] = useState("yellow")

    function cambioDeColor() {
        setColor("white")
    }
    

    return (
        <button id="buton" style={{backgroundColor: color}}  onClick={cambioDeColor}> {props.children}Mas informacion</button>
    )
}*/

export default Escuchar;

