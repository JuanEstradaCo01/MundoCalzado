import React, { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../servicios/firestore";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import FormCheckout from "./FormCheckout";
import "../item/item.css"

function Carrito() {

    const { cart, getTotalPrice, eliminarItemCarrito } = useContext(cartContext)

    const MySwal = withReactContent(Swal)

    if (cart.length === 0) {
        return (
            <>
                <div className="containerCartEmpty">
                    <h2 className="tittleCartEmpty"><strong>¡Carrito vacio!  😕</strong></h2>
                    <div>
                        <Link to="/"><FontAwesomeIcon icon={faShop} className="iconHome" /></Link>
                    </div>
                </div>
            </>
        )
    } else {
        async function Checkout(userData) {
            console.log(userData)

            const order = {
                Items: cart,
                Comprador: userData.nombres,
                Total: getTotalPrice(),
                Fecha: new Date().toLocaleString(),
            };

            const ordenId = await createOrder(order);

            MySwal.fire({
                show:true,
                title: "¡Gracias por tu compra!",
                text: "Tu compra fue exitosa, tu ID de compra es: " + ordenId,
                icon: "success",
                showConfirmButton: false,
                footer: "<a href='https://mundo-calzado.vercel.app/'><button class='btnAcept'>Aceptar</button></a>"
            });
        }

        return (
            <>
                <div className="h1Carrito">
                    <h1>Tu carro de compras:</h1>
                </div>

                {cart.map((item) => (
                    <div className="carritoContenedor">
                        <div className="contenedorImgCarrito">
                        <img className="imgCarrito" src={item.img} alt="imagen" />
                        </div>

                        <div className="contenedorItemCarrito">
                            <h3 className="itemCarrito">{item.titulo}</h3>
                            <p className="itemCarrito"><strong>Cantidad:</strong> {item.contador}</p>
                            <p className="itemCarrito"><strong>Color:</strong> {item.color}</p>
                            <p className="itemCarrito"><strong>c/u: ${item.precio}</strong></p>
                            <p className="itemCarrito"><strong>Total: ${item.precio * item.contador}</strong></p>
                            <button onClick={() => { eliminarItemCarrito(item.id) }} id={item.id} className="eliminar">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </div>
                ))}
                <h3>El total de tu compra es: <strong className="colorPrecioTotal">${getTotalPrice()}</strong></h3>

                <hr />

                <FormCheckout onCheckout={Checkout} />
                
            </>
        )
    }
}

export default Carrito;