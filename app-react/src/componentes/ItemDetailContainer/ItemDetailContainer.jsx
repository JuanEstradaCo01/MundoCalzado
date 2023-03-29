import React, { useState, useEffect } from "react";
import Item from "../item";
import ContarClick from "../ContadorClicks";
import Data from "../data/productos";
import { useParams } from "react-router-dom";


function getSingleItem(idURL) {

    /*Array productos:*/ 
  const Arrayproductos = [
    {
    id: 101,
    img:"https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg",
    titulo: "Nike",
    color: "Color: Blanco",
    precio: 500,
    categoria: "Deportivo"}
    ,
    {
    id: 102,
    img:"https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_1280.png",
    titulo: "Convers",
    color: "Color: Verde",
    precio: 400,
    categoria: "Casual"}
    ,
    {
    id: 103,
    img:"https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_1280.jpg",
    titulo: "Convers",
    color: "Color: Gris",
    precio: 600,
    categoria: "Casual"}
    ,
    {
    id: 104,
    img:"https://cdn.pixabay.com/photo/2014/12/31/11/41/shoes-584850_1280.jpg",
    titulo: "Merrell",
    color: "Color: Verde",
    precio: 800,
    categoria: "Calzado para montaña"}
  ]




    const promesa = new Promise( (resolve, reject) =>{
        setTimeout(
            () => {
                const encontrado = Arrayproductos.find( item => {
                    return(item.id === parseInt(idURL) )
                })
                resolve(encontrado)
            },1000)   
    })

    return promesa;
}



function ItemDetailContainer(){
    const [productos, setProduct] = useState([]);

    console.log(useParams)
    let { id } = useParams();
    console.log(id)

    useEffect(() => {
        getSingleItem(id).then((respuesta) => {
            console.log("Encontrado", respuesta);

            setProduct(respuesta);
        })
    }, []);


    return(
        <div>
            <img src={productos.img} alt="imagen" />
            <h1>{productos.titulo}</h1>
            <p>{productos.color}</p>
            <p>Categoria: {productos.categoria}</p>       
            <div><ContarClick/></div>
            <p>Precio: ${productos.precio}</p>          
        </div>
    )
}

export default ItemDetailContainer;


