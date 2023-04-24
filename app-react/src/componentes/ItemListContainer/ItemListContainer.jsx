import React, { useEffect } from "react";
import Item from "../item";
import Flex from "../item/flex/Flex";
import {useState} from "react";
import { useParams } from "react-router-dom";
import { getItems, getItemsByCategory } from "../../servicios/firestore";
import Loader from "../Loader/Loader";


function ItemListContainer() {
  const [productos, setProduct] = useState([]);
  const {categoriaid} = useParams();

  useEffect(() => {

    if(categoriaid === undefined){
    //traer todos los datos
    getItems().then((respuesta) => {

      setProduct(respuesta)
    })
  }else{
    //filtrar por categoria
    getItemsByCategory(categoriaid).then((respuesta) =>
    setProduct(respuesta)
    )
  }
  }, [categoriaid]);

  if (productos.length === 0) {
    return <Loader/>
  }

  

  function addToCart(contador){
    console.log("Agregado al carrito: " , productos.titulo )
    console.log("Cantidad de productos: ", contador)
}


  return (

    <div>
          <Flex>       
              
                {productos.map( productos => {
                return <Item
                  key={productos.id}
                  id={productos.id}
                  img={productos.img}
                  titulo= {productos.titulo}
                  color= {productos.color}
                  precio= {productos.precio}
                  categoria= {productos.categoria}
                />
              })}
                        
          </Flex>        
    </div>
  )
}

export default ItemListContainer;


