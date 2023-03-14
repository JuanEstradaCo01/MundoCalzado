import "./item.css"
import Tenis1 from "../imgs/tenis-1.jpg"

function Item(props){
    return (
    <div className="itemCardContenedor">
        <img src={Tenis1} className="itemCardImg" alt="imagen"></img>
        <div className="itemCardTitulo">
            <h2>{props.titulo}</h2>
        </div>
        <h4>$ {props.precio}</h4>
        <p>{props.descripcion}</p>
    </div>
    )
}

export default Item;