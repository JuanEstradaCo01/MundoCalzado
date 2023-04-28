import { useContext, useState } from "react";
import React from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../servicios/firestore";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function Carrito(){

    const context = useContext(cartContext)
    const { cart, getTotalPrice } = context;
   
    if (cart.length === 0 ){
        return(         
            <h1 className="h1Carrito">Tu carrito esta vacio... Ingresa productos de la tienda haciendo click<Link to="/">Aqui</Link></h1>              
        )
    }else{

    async function CheckOut(){
        
        const order = {
            Items: cart,
            Comprador: {nombre: "Pedro perez"},
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

    return(
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
                    <button className="eliminar">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                      
                    <hr />
                </div>               
            ))}
            <h3>El total de tu compra es: <strong className="colorPrecioTotal">${getTotalPrice()}</strong></h3>

            <hr />

            <div className="formContenedor">
                <h2>Ingresa los datos para finalizar</h2>
                <form>
                    <div className="inputFinalizar">
                        <label for="nombre" >
                            <p>Nombres: </p>
                        </label>
                        <input type="nombre" placeholder="Ingresa tu nombre"/>
                    </div>

                    <div className="inputFinalizar">
                        <label for="apellido">
                            <p>Apellidos: </p>
                        </label>
                        <input type="apellido" placeholder="Ingresa tus apellidos" />
                    </div>

                    <div className="inputFinalizar">
                        <label for="email">
                            <p>Correo electronico: </p>
                        </label>
                        <input type="email" placeholder="example@email.com" />
                    </div>

                    <div className="inputFinalizar">
                        <label for="direccion">
                            <p>Direccion de entrega: </p>
                        </label>
                        <input type="direccion" placeholder="Direccion de entrega" />
                    </div>

                </form>
            </div>

            <hr />
            <button onClick={CheckOut} className="botonComprar">Finalizar comprar</button>
        </div>
    
)

}
}

export default Carrito;