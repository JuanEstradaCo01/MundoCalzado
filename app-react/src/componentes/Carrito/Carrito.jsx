import { useContext, useState } from "react";
import React from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../servicios/firestore";
import swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import FormCheckout from "./FormCheckout";


function Carrito(){

    const context = useContext(cartContext)
    const { cart, getTotalPrice } = context;

   
    if (cart.length === 0 ){
        return(         
            <h1 className="h1Carrito">Tu carrito esta vacio... Ingresa productos de la tienda haciendo click<Link to="/">Aqui</Link></h1>              
        )
    }else{

    async function CheckOut(userData){
        
        const order = {
            Items: cart,
            Comprador: userData,
            Total: getTotalPrice() ,
            Fecha: new Date(),
        };

        const ordenId = await createOrder(order);  

        const ordenCompletada = await swal({
            title: "¡Gracias por tu compra!",
            text: "Tu compra fue exitosa, tu ID de compra es: "+ ordenId,
            icon: "success",
          });
        
    }

    const prueba= "";

    function eliminarDelCarrito (ordenId) {
        const item = cart.find((prod) => prod.id === ordenId)
        const indice = cart.indexOf(item)
        prueba.remove(indice, 1)
        //pintarItems(prueba, "eliminar")
}


    return (
        <div>
            
            <div className="h1Carrito">
                <h1>Tu carro de compras:</h1>
            </div>

            {cart.map( (item) => (
                <div className="carritoContenedor">
                    <hr />
                    <img className="imgCarrito" src={item.img} alt="imagen" />
                    <h3 className="itemCarrito">{item.titulo}</h3>
                    <p className="itemCarrito">Cantidad: {item.contador}</p>
                    <p className="itemCarrito">Color: {item.color}</p>
                    <p className="itemCarrito">Precio unitario: ${item.precio}</p>
                    <button onClick={eliminarDelCarrito} className="eliminar">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                      
                    <hr /> 
                </div>                  
            ))}
            <h3>El total de tu compra es: <strong className="colorPrecioTotal">${getTotalPrice()}</strong></h3>
    
            <hr />

            <FormCheckout onCheckout= {CheckOut}/>
        </div>
)
}}

export default Carrito;