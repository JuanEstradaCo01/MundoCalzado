import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../servicios/firestore";
import swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import FormCheckout from "./FormCheckout";
import "../item/item.css"

function Carrito() {

    const { cart, getTotalPrice, eliminarItemCarrito } = useContext(cartContext)

    if (cart.length === 0) {
        return (
            <>
                <div className="containerCartEmpty">
                    <h1 className="tittleCartEmpty">Carrito vacio  😕</h1>
                    <div>
                    <Link to="/"><FontAwesomeIcon icon={faShop} className="iconHome" /></Link>
                    </div>
                </div>
            </>
        )
    } else {
        async function CheckOut(userData) {

            const order = {
                Items: cart,
                Comprador: userData,
                Total: getTotalPrice(),
                Fecha: new Date(),
            };

            const ordenId = await createOrder(order);

            await swal({
                title: "¡Gracias por tu compra!",
                text: "Tu compra fue exitosa, tu ID de compra es: " + ordenId,
                icon: "success",
            });

        }

        return (
            <>
                <div className="h1Carrito">
                    <h1>Tu carro de compras:</h1>
                </div>

                {cart.map((item) => (
                    <div className="carritoContenedor">
                        <hr />
                        <img className="imgCarrito" src={item.img} alt="imagen" />
                        <h3 className="itemCarrito">{item.titulo}</h3>
                        <p className="itemCarrito">Cantidad: {item.contador}</p>
                        <p className="itemCarrito">Color: {item.color}</p>
                        <p className="itemCarrito">Precio unitario: <strong>${item.precio}</strong></p>
                        <button onClick={() => { eliminarItemCarrito(item.id) }} id={item.id} className="eliminar">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>

                        <hr />
                    </div>
                ))}
                <h3>El total de tu compra es: <strong className="colorPrecioTotal">${getTotalPrice()}</strong></h3>

                <hr />

                <FormCheckout onCheckout={CheckOut} />
            </>
        )
    }
}

export default Carrito;