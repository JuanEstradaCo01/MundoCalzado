import React, { useEffect } from "react";
import Item from "../item";
import Flex from "../item/flex/Flex";
import Boton from "../Boton";
import ContarClick from "../ContadorClicks";
import {useState} from "react";
import { useParams } from "react-router-dom";



function getItems(category) {

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


  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {     
      resolve(Arrayproductos)
    }, 1000);
  })
  return promesa;
}


function getItemsByCategory(categoryURL) {
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

  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {    
      const filtro = Arrayproductos.filter(item => item.categoria === categoryURL)
      resolve(filtro)
    }, 1000);
  })
  return promesa;
}

function ItemListContainer() {
  const [productos, setProduct] = useState([]);
  const {categoryid} = useParams();

  console.log("Render...")


  console.log(useParams())

  useEffect(() => {

    if(categoryid === undefined){

    getItems().then((respuesta) => {

      setProduct(respuesta)
    })
  }else{

    getItemsByCategory(categoryid).then((respuesta) =>
    setProduct(respuesta)
    )
  }
  }, []);

  return (

    <div>
          <Flex>       
              
                {productos.map( productos => {
                return <Item
                  key={productos.id}
                  id={productos.id}
                  img={productos.img}
                  titulo= {productos.titulo}
                  contador= {<ContarClick/>}
                  color= {productos.color}
                  precio= {productos.precio}
                  categoria= {productos.categoria}
                  boton= {<Boton/>}
                />
              })}
                        
          </Flex>        
    </div>
  )
}

export default ItemListContainer;


