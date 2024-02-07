import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../item/item.css"

function Contador(props) {

    const notify = () =>
        toast.success('¡Agregado al carrito!', {
            position: "bottom-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
    });

    let [contador, setCount] = useState(0);

    if (contador > 0) {
        function handleSumar() {
            setCount(contador + 1)
        }

        function handleRestar() {
            setCount(contador - 1)
        }
        return (
            <>
                <div className="count">
                    <div className="contenedorCounter">
                        <button className="contarMenos" onClick={handleRestar}>-</button>
                        <span className="spanCounter">{contador}</span>
                        <button className="contarMas" onClick={handleSumar}>+</button>
                    </div>
                    <button className="botonAgregar" onClick={() => {
                        props.onAddToCart(contador)
                        notify()
                    }}>Agregar al carrito</button>
                    <ToastContainer />
                </div>
            </>
        )
    } else {
        function handleSumar() {
            setCount(contador + 1)
        }

        function handleRestar() {
            setCount(contador)
        }
        return (
            <>
                <div className="count">
                    <div className="contenedorCounter">
                        <button className="contarMenos" onClick={handleRestar} disabled>-</button>
                        <span className="spanCounter">{contador}</span>
                        <button className="contarMas" onClick={handleSumar}>+</button>
                    </div>
                    <button className="botonAgregar" disabled>Agregar al carrito</button>
                </div>
            </>
        )
    }
}

export default Contador;




