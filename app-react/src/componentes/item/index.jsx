import { Link } from "react-router-dom";
import "./item.css"

function Item(props){

    return (
    <div id={props.id} className="itemCardContenedor">
        <img  src={props.img} className="itemCardImg" alt="imagen"></img>
        <div className="itemCardTitulo">
            <h2>{props.titulo}</h2>
            <h5>{props.color}</h5>
        </div>
        <span>{props.contador}</span>
        <h4>$ {props.precio}</h4>
        <ul className="verDetalle">
            <li>
            <Link to={`/item/${props.id}-${props.titulo}`}><button className="BotonDetalle">Ver detalles</button></Link>
            </li>
        </ul>
        <p>{props.categoria}</p>
    </div>
    )
}

export default Item;