import { Link } from "react-router-dom";
import "./item.css"

function Item(props){


    return (
    <div id={props.id} className="itemCardContenedor">
        <img className= "itemCardImg" src={props.img}  alt="imagen"></img>
        <div className="info">
            <div className="itemCardTitulo">
                <h2>{props.titulo}</h2>
                <h5>{props.color}</h5>
            </div>
            <h4>$ {props.precio}</h4>
            <ul className="verDetalle">
                <li>
                <Link to={`/item/${props.id}`}><button className="BotonDetalle">Ver detalles</button></Link>
                </li>
            </ul>
            <p>Categoria: {props.categoria}</p>
            <span>{props.contador}</span>
        </div>
    </div>
    )
}
export default Item;
