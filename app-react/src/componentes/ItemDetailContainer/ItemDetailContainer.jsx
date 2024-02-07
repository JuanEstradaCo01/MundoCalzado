import React, { useState, useEffect, useContext } from "react";
import Contador from "../Contador/Contador";
import { useParams } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { getSingleItem } from "../../servicios/firestore";
import Loader from "../Loader/Loader";

function ItemDetailContainer() {

    const [products, setProduct] = useState([]);

    let { id } = useParams();

    const { agregarItem } = useContext(cartContext)


    useEffect(() => {
        getSingleItem(id).then((respuesta) => {
            setProduct(respuesta);
        })
    }, [id]);


    if (products.length === 0) {
        return <Loader />
    }

    function onAddToCart(contador) {
        agregarItem(products, contador);
    }

    return (
        <>
            <div className="contDetail">
                <div className="containerProductDetails">
                    <img id="imgDetail" src={products.img} alt="imagen" />
                    <h1>{products.titulo}</h1>
                    <p><strong>Color:</strong> {products.color}</p>
                    <p><strong>Categoria:</strong> {products.categoria}</p>
                    <p><strong>Precio:</strong> <strong>${products.precio}</strong></p>
                    <Contador onAddToCart={onAddToCart} />
                </div>
            </div>
        </>
    )
}

export default ItemDetailContainer;


