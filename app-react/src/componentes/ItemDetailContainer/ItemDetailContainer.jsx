import React, { useState, useEffect } from "react";
import Contador from "../Contador/Contador";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { getSingleItem } from "../../servicios/firestore";
import Loader from "../Loader/Loader";


function ItemDetailContainer(){

    const [productos, setProduct] = useState([]);
   
    let { id } = useParams();

    const { cart, agregarItem } = useContext(cartContext)

    console.log("cart", cart)


    useEffect(() => {
    
        getSingleItem(id).then((respuesta) => {
            console.log("Encontrado", respuesta);

            setProduct(respuesta);
        })
    }, [id]);


    if (productos.length === 0) {
        return <Loader/>
      }

    function onAddToCart(contador){
        console.log("Agregado al carrito: " , productos.titulo )
        console.log("Cantidad de productos: ", contador)
        agregarItem(productos, contador);
    }

    return(
        <>
            <img id="imgDetail" src={productos.img} alt="imagen" />
            <h1>{productos.titulo}</h1>
            <p>{productos.color}</p>
            <p>Categoria: {productos.categoria}</p>  
            <p>Precio: ${productos.precio}</p>    
            <Contador onAddToCart={onAddToCart}/>                 
        </>
    )
}

export default ItemDetailContainer;


