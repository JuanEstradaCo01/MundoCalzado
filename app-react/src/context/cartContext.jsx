import { createContext,useState } from "react";

const cartContext = createContext({ cart: [] })
const Proveedor = cartContext.Provider;




function Cartprovider(props){
    const [ cart, setCart ] = useState([])

    function agregarItem(products, contador){


        const newCart = [...cart];
        newCart.push({...products, contador})
        setCart(newCart) 
    }

    function getTotalPrice(){
        const total = cart.reduce((cantidad, precio) => cantidad + precio.precio * precio.contador, 0)
        return total;
    }

    return(
        <cartContext.Provider value={ { cart, agregarItem, getTotalPrice} }> 
           {props.children}
        </cartContext.Provider>
    )
}


export { cartContext, Cartprovider }