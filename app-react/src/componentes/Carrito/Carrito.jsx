import { useContext } from "react";
import React from "react";
import { cartContext } from "../../context/cartContext";



function Carrito(){

    const context = useContext(cartContext)
    const cart = context.cart;
    const getTotalPrice = context.getTotalPrice;

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
                    <p className="itemCarrito">Precio: ${item.precio}</p>
                    <hr />
                </div>               
            ))}
            <h3>El total de tu compra es: $<strong>{getTotalPrice()}</strong></h3>
            <hr />
            <button className="botonComprar">Comprar</button>
        </div>
    
)
}

export default Carrito;