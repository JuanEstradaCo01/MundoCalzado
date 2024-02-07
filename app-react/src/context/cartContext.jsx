import React, { createContext, useState } from "react";

const cartContext = createContext({cart:[]});
const Proveedor = cartContext.Provider;

function Cartprovider(props) {
    const [ cart, setCart ] = useState([])

    function agregarItem(products, contador) {
        const newCart = [...cart]
        newCart.push({...products, contador})
        setCart(newCart)
    }

    function getTotalPrice() {
        const total = cart.reduce((cantidad, precio) => cantidad + precio.precio * precio.contador, 0)
        return total;
    }

    function eliminarItemCarrito(id) {
        const product = cart.find(item => item.id === id)
        if(!product){
            return (
                <>
                    <h1>Error al eliminar el producto</h1>
                </>
            )
        }

        const index = cart.findIndex(item => item.id === id)
        let copia = [...cart]
        copia.splice(index, 1)
        setCart(copia)
    }

    return (
        <Proveedor value={ { cart, agregarItem, getTotalPrice, eliminarItemCarrito } }>
            {props.children}
        </Proveedor>
    )
}

export { cartContext, Cartprovider }