import { useContext } from "react";
import { contexto } from "../../App"



function Formulario(props) {

    // onKeypress

    function handleKeyDown(evt){
        console.log(evt)

    }
    
    <h2>¡Registrate y obten grandes beneficios!</h2>

    const { name,profilepic } = useContext(contexto);

    return (
        <form>

            <img className="loginImg" src= "" alt="usuario" />
            <h2>{name}</h2>

            <hr />
            <hr />

            <div>
                <label for="nombre" >
                    <p>Nombres: </p>
                </label>
                <input type="nombre" placeholder="Ingresa tu nombre"/>
            </div>

            <div>
                <label for="apellido">
                    <p>Apellidos: </p>
                </label>
                <input type="apellido" placeholder="Ingresa tus apellidos" />
            </div>

            <div>
                <label for="email">
                    <p>Correo electronico: </p>
                </label>
                <input type="email" placeholder="example@email.com" />
            </div>

            <div>
                <label for="pas">
                    <p>Contraseña: </p>
                </label>
                <input onKeyDown={handleKeyDown} type="password" placeholder="Ingresa una contraseña" />
            </div>

            <button type="submit" className="btn btn-primary">
                Registrarse
            </button>


        </form>
    )


}

export default Formulario;